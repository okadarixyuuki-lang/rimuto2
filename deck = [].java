deck = []

function createDeck() {
    for(int i = 1; i < 104; i++) {
        let bull = 1;
        if(i % 55 = 0;) bull = 7;
        if(i % 11 = 0;) bull = 5;
        if(i % 10 = 0;) bull = 3;
        if(i % 5 = 0;) bull = 2;
    
        deck.push({number:i,bull:bull});
    }  
}

function shahullDeck() {
    deck = [*1..n]
    deck.sort_by!{rand}
    p deck
}