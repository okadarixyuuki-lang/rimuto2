deck = []
player = [[],[],[],[]]
fiald = [[],[],[],[]]
function playergivrd() {
    for(let i = 0; i< player.length; i++){
        for(let j =0; j<10; j++){
            player[i].push(deck.pop())
        }
    }
}
function setupard(){
    for(let i = 0; i<fiald.length; i++){
        fiald[i].push(deck.pop())
    }
}
