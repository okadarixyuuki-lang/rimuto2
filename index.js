let deck = [];
    let players = [[], [], [], []];   // 0:人間, 1〜3:CPU
    let field = [[], [], [], []];
    let play = [];
    let score = [66, 66, 66, 66];

    const f = document.getElementById('field');
    const h = document.getElementById('hand');
    const scoreboard = document.getElementById('scoreboard');

    function createCardElement(card) {
      const el = document.createElement('div');
      el.className = 'card';

      const number = document.createElement('div');
      number.className = 'number';
      number.textContent = card.number;

      const bull = document.createElement('div');
      bull.className = 'bull';
      bull.textContent = '🐮' + card.bull;

      el.appendChild(number);
      el.appendChild(bull);

      return el;
    }

    function renderField() {
      f.innerHTML = '';

      field.forEach(row => {
        const div = document.createElement('div');
        div.className = 'row';

        row.forEach(card => {
          div.appendChild(createCardElement(card));
        });

        f.appendChild(div);
      });
    }

    function renderHand() {
      h.innerHTML = '';

      players[0].forEach((card, index) => {
        const c = createCardElement(card);

        c.onclick = () => {
          playCard(index);
          nextTurn();
        };

        h.appendChild(c);
      });
    }

    function updateScoreboard() {
      scoreboard.innerHTML = '';
      let html = '';
      for (let i = 0; i < 4; i++) {
        html += `プレイヤー${i}: ${score[i]} 点<br>`;
      }
      scoreboard.innerHTML = html;
    }

    function placeCard(card, playerIndex) {
      let bestRow = -1;
      let minDiff = Infinity;

      for (let i = 0; i < 4; i++) {
        if (field[i].length === 0) continue;
        let last = field[i][field[i].length - 1];
        if (last.number < card.number) {
          let diff = card.number - last.number;
          if (diff < minDiff) {
            minDiff = diff;
            bestRow = i;
          }
        }
      }

      if (bestRow === -1) {
        let taken = field[0];
        let sum = taken.reduce((a, c) => a + c.bull, 0);
        score[playerIndex] -= sum;
        field[0] = [card]; 
        return;
      }

      field[bestRow].push(card);


      if (field[bestRow].length === 6) {
        let taken = field[bestRow].slice(0, 5);
        let sum = taken.reduce((a, c) => a + c.bull, 0);
        score[playerIndex] -= sum;
  
        field[bestRow] = [field[bestRow][5]];
      }
    }

    function cpuPlay() {
      for (let i = 1; i < 4; i++) {
        let hand = players[i];
        if (hand.length === 0) continue;
        let index = Math.floor(Math.random() * hand.length);
        let card = hand.splice(index, 1)[0];
        play.push({ player: i, card: card });
      }
    }

    function createDeck() {
      deck = [];
      for (let i = 1; i <= 104; i++) {
        let bull = 1;
        if (i % 55 === 0) bull = 7;
        else if (i % 11 === 0) bull = 5;
        else if (i % 10 === 0) bull = 3;
        else if (i % 5 === 0) bull = 2;

        deck.push({ number: i, bull: bull });
      }
    }

    function shuffleDeck() {
      for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    }

    function dealPlayers() {
      for (let i = 0; i < players.length; i++) {
        for (let j = 0; j < 10; j++) {
          players[i].push(deck.pop());
        }
      }
    }

    function setupField() {
      for (let i = 0; i < field.length; i++) {
        field[i].push(deck.pop());
      }
    }

    function playCard(index) {
      let card = players[0].splice(index, 1)[0];
      play.push({ player: 0, card: card });
      renderHand();
    }

    function checkEndGame() {
      for (let i = 0; i < 4; i++) {
        if (score[i] <= 0) {
          alert('プレイヤー' + i + ' の点数が0以下になりました。ゲーム終了');
          location.reload();
        }
      }

      // 手札がなくなったら終了
      if (players[0].length === 0) {
        let winner = 0;
        let maxScore = score[0];
        for (let i = 1; i < 4; i++) {
          if (score[i] > maxScore) {
            maxScore = score[i];
            winner = i;
          }
        }
        alert('ゲーム終了！ 勝者: プレイヤー' + winner + '（' + maxScore + '点）');
        location.reload();
      }
    }

    function nextTurn() {
      cpuPlay();

      play.sort((a, b) => a.card.number - b.card.number);
      play.forEach(p => placeCard(p.card, p.player));

      play = [];

      renderField();
      renderHand();
      updateScoreboard();
      checkEndGame();
    }

    function initGame() {
      createDeck();
      shuffleDeck();
      dealPlayers();
      setupField();
      renderField();
      renderHand();
      updateScoreboard();
    }

    initGame();
