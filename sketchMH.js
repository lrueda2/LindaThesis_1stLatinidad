

//var spot = {
  //x: 100,
  //y: 50,
//};


function preload(){
  // comic = loadFont("assets/ComicSan.otf");
}

function setup() {
  //createCanvas(1450, 1125);
  canvas = createCanvas(700, 495);
  //canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(775, 200);
  //window.innerWidth, window.innerHeight
    
    //part = 1;
}

function draw(){
clear();
background(0, 0);
//background(233,222,217);

if (mouseIsPressed == true) {
   textSize(18);
  //textAlign(LEFT);
 // noStroke();
 fill(251, 169, 26);
 textFont("Alegraya");
 text('“At first, my parents thought it was too good to be true. My parents had never', 5, 5, width); //+25
 text('gone to therapy during their adolescence because it\'s very expensive to go seek therapy', 5, 30, width); //+25
 text('The family my parents came from, would shame on their own family for seeking help', 5, 55, width); //+25
 text('because it\'s a sign of weakness meaning they can\'t handle their own life" - A.G', 5, 80, width); //+25

 fill(110, 190, 69);
 text('"Before I came to Chicago, my old school in Mexico did not have a school psychologists', 5, 125, width); 
 text('because my school couldn\'t afford it. Throughout my middle school, I thought talking', 5, 150, width); 
 text('to a psychologist was only for the upper class. I had to try to deal with it since I couldn\'t', 5, 175, width);
 text('afford it. When I came to Chicago, one of my high school teachers noticed I was', 5, 200, width);
 text('feeling down on my first week of high school. He asked if I needed to talk to the school', 5, 225, width);
 text('psychologists. I told him that I couldn\'t afford one. That\s when he told me that the', 5, 250, width);
 text('school psychologist was free. I was in shock because I saw getting an education in', 5, 275, width);
 text('America was more luxurious than going to a private school in Mexico. I', 5, 300, width);
 text('realized that in America, there\’s so many resources that back home didn\'t have" -M.M', 5, 325, width);
 }

  else {
  textSize(18);
  //textAlign(LEFT);
  //noStroke();
  fill(110, 190, 69);
  textFont("Alegraya");
  text('“My parents had seen this as a luxury for the real Americans because they have never', 5, 5, width); //+25
  text('used this type of resource back in their time” - R.A', 5, 30, width); //+25
  
  fill(251, 169, 26);
  text('“Even though I don\'t have health insurance or medicaid to afford for therapy or talk to', 5, 75, width); //+25
  text('my psychologists, my parents said I\'m wasting my money on stupid things” - M.A', 5, 100, width); //+25

  fill(110, 190, 69);
  text('I went to a low income high school in a bad community, which my school couldn\'t afford', 5, 145, width);
  text('a school psychologist, but recommended me to seek for one outside of school, which', 5, 170, width);//+45
  text('was crazy expensive. I was in my worst state, and I thought I won\'t make it through high', 5, 195, width);//+45
  text('school. I was surprised that I was able to go to a university, which I was able to', 5, 220, width);//+45
  text('seek the proper help for my mental health on campus for free." -M.O', 5, 245, width);//+45
  }


}
