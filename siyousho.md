# 仕様書    
- 画面
- []　フィールド
- []　手持ち
- []　カードデザイン

- プログラム
- []　html
- []  css
- []  javascript

ファイル名　index.html
        　style.css
          index.js

htmlファイル
<div id = score></div>
<div id = fiald></div>
<div id = hand></div>


css
#fiald
#score
#hand
.row
.card
.number
.bull


htmlファイル
<div id = score></div>
<div id = fiald></div>
<div id = hand></div>


css
#fiald
#score

#hand
.row
.card
.number
.bull

deck = []
player = [[],[],[],[]]
fiald = [[],[],[],[]]
play = []

javascript
createDeckel()　カード情報のデザイン　　片山
createDeck() 返り値　deck[{number i, bull}]　　岡田
shahullDeck() 返り値　混ざったdecck[]　　岡田
playergivrd()　カード配布　　渡辺
setupard()　　　場にカード初期配置 渡辺
hyoujifiald() 手札表示
hyoujihand()　場のカード表示 
cpuplay()　　　自動操作
nextTrun()　　　次の人のターンを表示
onCard()　　　　カードを置く処理

