deck = [];
player = [[],[],[],[]];
fiald = [[],[],[],[]];
play = [];
let score = [66,66,66,66];

const f = document.getElementById('fiald');
const h = document.getElementById('hand');

function createDeckel(card){
    const el = document.createElement('div');
    el.className = 'card';

    const number = document.createElement('div');
    number.className = 'nunber';
    number.textContent = card.number;

    const bull = document.createElement('div');
    bull.className = 'bull';
    bull.textContent = "🐮" + card.bull;

    el.appendChild(number);
    el.appendChild(bull);
}


function hyoujifiald() {
    f.innerHTML = '';

    fiald.forEach(row => {
        const div = document.createElement('div');
        div.className = 'row';

        row.forEach(card => {
            div.appendChild(createDeckel(card));

        });

        f.appendChile(div);
    });
}

function hyoujihand(){
    h.innerHTML = '';

    player[0].forEach((card,index) => {
        let c = createDeckel(card);

        c.onclock=()=>{
            onCard(index);
            nextTrun();
        };

        h.appendChild(c);
    });
}

function onCard(card, player) {
    let cleanedArray = field[i].filter(item => item !== null);
    let last = cleanedArray[cleanedArray.length - 1];
}


function cpuplay() {
    for(let i = 1; i < 4; i++) {
        let hand=player[i];
        let index = Math.floor(Math.random()*hand.length);
        let card = hand.splice(index,1)[0];
        play.push({player:i,card:card});
    }
}

function createDeck() {
    for(let i = 1; i < 104; i++) {
        let bull = 1;
        if(i % 55 == 0) bull = 7;
        if(i % 11 == 0) bull = 5;
        if(i % 10 == 0) bull = 3;
        if(i % 5 == 0) bull = 2;
    
        deck.push({number:i,bull:bull});
    }  
}

function shahullDeck() {
    deck = [*1..n]
    deck.sort_by!{rand}
    p deck
}

function endgame(){
    for(let i = 0; i < 4; i++) {
        if (score[i] <= 0) {
            alert("player" + i + "ゲーム終了");
            location.reload();
        }
    }
}