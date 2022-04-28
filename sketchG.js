

//var spot = {
  //x: 100,
  //y: 50,
//};


//var clarendon;

function preload(){
  // comic = loadFont("assets/ComicSan.otf");
}

function setup() {
  //createCanvas(1450, 1125);
  canvas = createCanvas(700, 495);
  //canvas = createCanvas(window.innerWidth, window.innerHeight);
   // canvas.position(750, 260);
  canvas.position(775, 260);
    
    //part = 1;
}

function draw(){
clear();
background(0, 0);
//background(233,222,197);

  if (mouseY < height/2){
  //description
   //if (mouseIsPressed) {
    //fill(255, 255, 0);
  //}
  textSize(18);
  //textAlign(LEFT);
  fill(251, 169, 26);
  //noStroke();
  textFont("Alegraya");
  text('"Going out alone is too scary to go out alone because of creeps following you without', 5, 5, width); //+25
  text('giving a fuck. Even when you already said no like 10 times, they won\'t listen and they still', 5, 30, width); //+25
  text('stalks you until male company comes in" - M.R', 5, 55, width); //+45
  
  text('"I just wish men would leave us alone. Don\'t they understand no means no. I don\'t go to', 5, 100, width); //+25
  text('clubs just to be harassed by dumb men, I want to spend my night with my girls" - M.A' , 5, 125, width); //+45

  text('"Growing up without a mom is very tough. My dad never understands me and he never', 5, 170, width); //+25
  text('wants to listen to me whether it\'s about my concerns, goals, or good news. He only' , 5, 195, width); //+25
  text('focuses on my little brother, which makes him a lazy spoiled brat, that\’s never a good thing" -L.M' , 5, 220, width); //+45

  text('"Girls are encouraged to have relationships with older men, because, it is said, they', 5, 265, width); //+25
  text('are mature for their age. Women get pregnant: socially, they take full responsibility for', 5, 290, width); //+25
  text('the baby as abortion is illegal in Brazil. Older men know how to convince girls to do', 5, 315, width); //+25
  text('what they want. Adolescent mothers quit school, don\'t attend college, and settle for under', 5, 340, width); //+25
  text('eemployment because they need to support their children. Additionally, women who', 5, 365, width); //+25
  text('were victims of rape culture as young girls are considered sluts." -C.P', 5, 390, width); //+25

}
if (mouseY >= height/2) {
  //location
   //if (mouseIsPressed) {
    //fill(255, 255, 0);
  //}
  textSize(18);
  //textAlign(LEFT);
  //noStroke();
  text('“I remember I was minding my own business until a random guy approach me and said', 5, 5, width); //+25
  text('something in spanish, but I have no idea what he said. He just kissed me on the face and I', 5, 30, width); //+25
  text('told him to stop. Luckily my boyfriend came and pushed the guy away. Little we know', 5, 55, width); //+25
  text('that guy has a short temper since he wanted to start a fight with my boyfriend." -A.G', 5, 80, width); //+45

  text('"A striking difference I noticed when I first came to the U.S. was that I was not', 5, 125, width); //+25
  text('getting cat calls out when I was out walking in the streets. In Mexico, everywhere I went', 5, 150, width); //+25
  text('since I was a preteen, for goodness’ sake), I would be subjected to catcalls and whistles.', 5, 175, width); //+25
  text('The harassment only got worse the older I got. My experience as a woman was of', 5, 200, width); //+25
  text('always being on high alert." -H.R', 5, 225, width); //+45

  text('when I came to the U.S., I felt respected. I could exist without being harassed continually.', 5, 270, width); //+25
  text('Women here seem to have a voice and the same opportunities as men to grow and pursue', 5, 295, width); //+25
  text('their dreams. I felt free to pursue a career and not be expected to only dream of marrying', 5, 320, width); //+25
  text('and having children. Although, over the years, I’ve come to realize there still is much', 5, 345, width); //+25
  text('room for improvement." -G.R', 5, 370, width); //+25
}


}
