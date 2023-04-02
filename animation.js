const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

document.body.appendChild(canvas);


//* Değişkenler ve diziler 
snow = [];



//* Canvas tasarım alanı
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



//* Kar tanalerini ekleme
function ekle(x, y, r, v){
    for(let i = 0; i<canvas.width/3; i++){
        x = Math.random()*canvas.width;
        y = Math.random()*canvas.height;
        r = (Math.random()*2)+0.2;
        if(r>1){
            v = (Math.random()*0.9)+0.3;
        }
        else{
            v = (Math.random()*0.2)+1;
        }
        snow.push({"x":x, "y":y, "r":r, "v":v});
    }
}

ekle();
console.log(snow.length);


//* Kar tanelerini çizdirme
function cizdir(){
    for(let i = 0; i<snow.length; i++){
        ctx.beginPath();
        ctx.fillStyle = "white";

        ctx.arc(snow[i].x, snow[i].y, snow[i].r, 0, 2*Math.PI, false);
        ctx.fill();
        ctx.closePath();
        snow[i].y += snow[i].v;
        if(snow[i].y>=canvas.height){
            snow[i].y = 0;
        }
        snow[i].x += 0.2;
        if(snow[i].x>=canvas.width){
            snow[i].x = 0;
        }
    }
}



//! Ana fonksiyon
function loop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    cizdir();
}
setInterval(loop, 1000/60);