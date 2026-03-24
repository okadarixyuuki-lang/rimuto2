
let score = [66,66,66,66];
function endgame(){
    for(let i = 0; i < 4; i++) {
        if (score[i] <=0 0) {
            alert("player" + i + "ゲーム終了");
            location.reload();
        }
    }
}