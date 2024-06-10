//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let RaqueteComprimento = 10;
let RaqueteAltura = 90;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let VelocidadeyOponente;

let colidiu = false;

//

function setup() {
  createCanvas(600, 400);
}

function draw() {
 background(0);
 mostraBolinha();
 movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  MovimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
}
function mostraBolinha(){ 
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
   xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificaColisaoBorda(){
   if (xBolinha + raio > width ||
     xBolinha -raio< 0){
    velocidadexBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }
}

 function mostraRaquete(x,y){
  rect(x, y, RaqueteComprimento, RaqueteAltura);
}



function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
 }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + RaqueteComprimento && yBolinha -
    raio < yRaquete + RaqueteAltura && yBolinha + raio > yRaquete){
   velocidadexBolinha *= -1;
  }
}

function verificaColisaoRaquete(x, y){
 colidiu = collideRectCircle (x, y, RaqueteComprimento, RaqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadexBolinha *= -1;
  }
}

function MovimentaRaqueteOponente(){
  VelocidadeyOponente = yBolinha - yRaqueteOponente - RaqueteComprimento /- 30;
  yRaqueteOponente += VelocidadeyOponente

}