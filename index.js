deck = [];
player = [[],[],[],[]];
fiald = [[],[],[],[]];
play = [];

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


