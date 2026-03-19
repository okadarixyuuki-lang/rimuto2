
player = [[],[],[],[]]
fiald = [[],[],[],[]]
play = []

function cpuplay() {
    for(let i = 1; i < 4; i++) {
        let hand=player[i];
        let index = Math.floor(Math.random()*hand.length);
        let card = hand.splice(index,1)[0];
        play.push({player:i,card:card});
    }
}