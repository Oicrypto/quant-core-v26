async function btc(){
try{
const r = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT");
const d = await r.json();
document.getElementById("btc").innerText = "$" + Number(d.price).toFixed(0);
}catch(e){}
}

btc();
setInterval(btc,5000);
