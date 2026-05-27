async function loadBTC(){

try{

const response = await fetch(
'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT'
);

const data = await response.json();

const price = Number(data.price).toLocaleString();

document.getElementById('btcPrice').innerHTML = '$' + price;

}catch(err){

console.log(err);

document.getElementById('btcPrice').innerHTML = '$109,245';

}

}

loadBTC();

setInterval(loadBTC,5000);

const ticker = document.getElementById('ticker');

const coins = [
'BTC +1.8%',
'ETH +3.1%',
'SOL +4.8%',
'XRP -0.5%',
'BNB +2.2%',
'DOGE +7.1%',
'TOTAL3 +2.4%',
'BTC DOM 61.2%'
];

function renderTicker(){

let text = '';

for(let i=0;i<20;i++){
text += coins.join(' • ') + ' • ';
}

ticker.innerHTML = text;

}

renderTicker();
