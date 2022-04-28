
//New Shit

var s1 = function( sketch ) {
 sketch.setup = function() {
  let canvas1 = sketch.createCanvas(700, 485);
  //canvas1.position(45, 700);
  canvas1.position(40, 730);
  }

  sketch.draw = function() {
    //for canvas 1
    sketch.clear();
    sketch.background(0, 0);
   //sketch.background(233,222,207);
   //sketch.background(233,222,177);

 if (sketch.mouseY < sketch.height/2){
  //description
  sketch.textSize(18);
 sketch.fill(251, 169, 26);
 //sketch.textAlign(LEFT);
  //sketch.noStroke();
  sketch.textFont("Alegraya");
  sketch.text('“I’m a professional kickboxer and I still get judged by my own family. They always tell', 5, 5, width); //+25
  sketch.text('me that kickboxing\’s a man\’s sport and it best if left before I get seriously injured" -M.R', 5, 30, width); //+25

  sketch.fill(110, 190, 69);
  sketch.text('“I guess it\'s all nice and that I should be grateful that I get to have freedoms that my', 5, 75, width); //+25
  sketch.text('little sister doesn\’t at home. I know my little sister finds it as annoying as I do. I have', 5, 100, width); //+25
  sketch.text('to cancel my plans just to accompany my little sister with her errands, hangouts, and dates.', 5, 125, width); //+45
  sketch.text('My parents said that it’s my duty as an older brother to protect my little sister."" -J.R', 5, 150, width); //+45

 sketch.fill(251, 169, 26);
 sketch.text('“I guess it\’s nice that my family cares about my safety, at the same time it\'s really annoying', 5, 195, width); //+25
 sketch.text('because I can\'t even go to the local store on my own. Either my dad or my YOUNGER', 5, 220, width); //+25
 sketch.text('brother have to walk me to the local store, which is a block away from my house” -E.G', 5, 245, width); //+45

 sketch.fill(251, 169, 26);
 sketch.text('"When I was 10 years old, I was amazed how my dad fixed his car and my older brother, who', 5, 290, width); //+25
 sketch.text('was thirteen at the time, was there to see the magic happen. When I turned thirteen my dad', 5, 315, width); //+45
 sketch.text('called my brother to help him, I decided to tag along. My dad did not notice that I was there', 5, 340, width); //+25
 sketch.text('there with them. I asked my dad if he needed any help. He told me to make lemonade for them.', 5, 365, width); //+25
 sketch.text('I asked again "I meant help with the car?" That\’s when my dad pulled me to the side and', 5, 390, width); //+25 
 sketch.text('told me that this job is a man job and I should be helping my mom in the kitchen making', 5, 415, width); //+25
 sketch.text('dinner from the family. Well fuck him because now I\'m a bad ass mechicanal engineer" -E.L', 5, 440, width); //+25
}

if (sketch.mouseY >= sketch.height/2) {
  //location

 sketch.fill(251, 169, 26);
 sketch.textSize(18);
 //sketch.textAlign(LEFT);
 //sketch.noStroke();
 sketch.textFont("Alegraya");
 sketch.fill(251, 169, 26);
 sketch.text('“I just got out of a toxic relationship because my ex was too demanding. Luckily I got out', 5, 5, width); //+25
 sketch.text('sooner and spotted the red flags. Although, My own parents weren\'t happy because I can\'t', 5, 30, width); //+25
 sketch.text('keep a man. My parents even worry that I won\'t be able to find a partner before they leave', 5, 55, width); //+25
 sketch.text('this earth. I\'m an independent woman, can take care of myself, and know right from wrong. I', 5, 80, width); //+25
 sketch.text('don\'t want to be traumatized like how my friends and tias are from their terrible', 5, 105, width); //+25
 sketch.text('relationships or marriages." -M.G', 5, 130, width);

 sketch.fill(251, 169, 26);
 sketch.text('“When I was fourteen I had moved to Honduras. One day I decided to climb up a mango tree', 5, 175, width); //+25
 sketch.text('and when my family found out where I was I was scolded, not for the danger of climbing', 5, 200, width); //+25
 sketch.text('but because \'girls\' shouldn\’t climb trees.\' I could remember being angry for days after that', 5, 225, width); //+25
 sketch.text('thinking to myself what does being a girl have to do with trees? It doesn\'t make sense.', 5, 250, width); //+25
 sketch.text('As I got older I found that I was constantly trying to convince my family that who I was', 5, 275, width); //+25
 sketch.text('not entirely associated with being a girl. I just wanted to be me." -A.W', 5, 300, width); //+25

sketch.fill(251, 169, 26);
sketch.text('“My parents always tell me that I\'m wasting my money on stupid toys, when they\'re talking', 5, 345, width); //+25
sketch.text('about are my pepper spray and taser. My mom tried to convince me to throw those away and', 5, 370, width); //+25
sketch.text('that I should be asking either my dad, my brother, or even my tio to come with me either to', 5, 395, width); //+25
sketch.text('school, work, errands, etc. My family overreacted because I\'m a woman, but I know that I', 5, 420, width); //+25
sketch.text('have to do things on my own. I really want to move out the my house because I want to get', 5, 445, width); //+25
 sketch.text('my own privacy and independence that I never had at home" -O.G', 5, 470, width); //+25 
}
 }
};

// create a new instance of p5 and pass in the function for sketch 1
new p5(s1);

var s2 = function( sketch ) {

  sketch.setup = function() {
    let canvas2 = sketch.createCanvas(700, 450);
    canvas2.position(40,1250);
  }
  sketch.draw = function() {
    //for canvas 2
    sketch.clear();
    sketch.background(0, 0);
    //sketch.background(233,222,207);
    //sketch.background(233,222,177);

 if (sketch.mouseY < sketch.height/2){
  //description
  sketch.textSize(18);
 //sketch.fill(255, 0, 0);
 //sketch.textAlign(LEFT);
 sketch.textFont("Alegraya");
  //sketch.noStroke();
  sketch.fill(251, 169, 26);
  sketch.text('“I’m the head manager at Chase bank in my mid 30s and yet my parents have the', 5, 40, width); //+25
  sketch.text('nerve to tell me that I can\’t find a boyfriend because I scare men away. I choose to', 5, 65, width); //+25
  sketch.text('stay single knowing that I’m a boss lady and that I don’t need a man to take care', 5, 90, width);
  sketch.text('of me. Besides, I make twice as much money as any man in my job.“ -V.M', 5, 115, width);

  sketch.fill(110, 190, 69);
 sketch.text('“I fully support and respect my wife not because she makes more money. I see', 5, 160, width); //+25
 sketch.text('her determination and achieving her goals. I love that she can handle', 5, 185, width);
 sketch.text('things on her own because there\'s certain things I can\'t even do. I admire', 5, 210, width);
 sketch.text('her and grateful to have her in my life." -J.T', 5, 235, width);
  
}

if (sketch.mouseY >= sketch.height/2) {
  //location

 // sketch.fill(255, 255, 0);
 sketch.textSize(18);
 sketch.textFont("Alegraya");
 //sketch.textAlign(LEFT);
 //sketch.noStroke();
 sketch.fill(251, 169, 26);
 sketch.text('“I\'m a single mother and I still manage to afford things for my child. My mom\’s still', 5, 160, width); //+25
 sketch.text('concerned that I  don\'t have the father there for him to support me and my child', 5, 185, width);
 sketch.text('financially. I don\'t need his dirty money because I\'m working hard  for me and my', 5, 210, width);
 sketch.text('child and I still have time to spend with my child." -M.C', 5, 235, width);

sketch.fill(251, 169, 26);
sketch.text('“My parents shame me because I\'m living on my own without a man to help me', 5, 280, width);
sketch.text('split the rent. I understand that Chicago rent is very expensive, but I have a well', 5, 305, width);
sketch.text('paying job so I can afford my own lifestyle” -A.C', 5, 330, width);

}
  }
};


// create the second instance of p5 and pass in the function for sketch 2
new p5(s2);

var s3 = function( sketch ) {

  sketch.setup = function() {
    let canvas3 = sketch.createCanvas(725, 500);
    canvas3.position(775,1575);
  }
  sketch.draw = function() {
    //for canvas 2
    sketch.clear();
    sketch.background(0, 0);
    //sketch.background(233,222,207);
    //sketch.background(233,222,177);

 if (sketch.mouseY < sketch.height/2){
  //description
  sketch.textSize(18);
 //sketch.fill(255, 0, 0);
 //sketch.textAlign(LEFT);
 sketch.textFont("Alegraya");
  //sketch.noStroke();
  sketch.fill(110, 190, 69);
  sketch.text('“I regret listening and taking my dad\'s advice on how to be a real man. I\'m 31 years', 5, 40, width); //+25
  sketch.text('old, single, and I had never had a girlfriend in my life because I\'m attractive is', 5, 65, width); //+25
  sketch.text('what my parents told me. As I live on my own and it sucks because I don\'t know how to', 5, 90, width); //+25
  sketch.text('take care of myself. I always have to order uber eats, pay someone to do my laundry,', 5, 115, width); //+25
  sketch.text('and I even have to order a maid to clean my place." -A.G', 5, 140, width);
 
 sketch.fill(110, 190, 69);
 sketch.text('“When I was a little boy, I always wanted a kitchen playset. I was upset that my dad', 5, 185, width); //+25
 sketch.text('gave me a soccer ball because he gave my sister a kitchen playset that I been wanting.', 5, 210, width); //+25
 sketch.text('to have. My dad assumed that I was gay because I spend my free time with my mom as', 5, 235, width); //+25
 sketch.text('she  taught me to cook. Now I\'m a professional chef working in a 5 star restaurant." -T.R', 5, 260, width); //+25
 
 sketch.fill(110, 190, 69);
 sketch.text('“Ever since my dad left my mom for another women, my mom always put a lot of', 5, 305, width); //+25
 sketch.text('pressure on me now that I\'m the man of the house. It\'s a lot of work since I not only I to', 5, 330, width); //+25
 sketch.text('protect my mom, but also protect 4 of my younger sisters. More worse is that they never', 5, 355, width); //+25
 sketch.text('appreciate the time I put for them to take them somewhere and taking them back home', 5, 380, width); //+25
 sketch.text('safe. I think they still see me as if they might be betrayed just like what my dad did to us" -A.O', 5, 405, width); //+25
}

if (sketch.mouseY >= sketch.height/2) {
  //location

 // sketch.fill(255, 255, 0);
 sketch.textSize(18);
 sketch.textFont("Alegraya");
 //sketch.textAlign(LEFT);
 //sketch.noStroke();
 sketch.fill(110, 190, 69);
 sketch.text('“It\'s been 7 years since my dad passed away and life\’s been rough without him. He died', 5, 40, width); //+25
  sketch.text('when I was 7 years old. My mom told me to not to show any fear because real man are', 5, 65, width); //+25
  sketch.text('supposed to be brave. I was never taught or given advice to be a man because My dad', 5, 90, width); //+25
  sketch.text('didn\'t have time for me due to his serious illness and had to go to every doctor', 5, 115, width); //+25
  sketch.text('appointment. I can\'t join my after school activities because I have to be at home', 5, 140, width);
  sketch.text('to protect my mom." -M.M.R', 5, 165, width); //+45
 
 sketch.fill(110, 190, 69);
 sketch.text('“I hate to see my mom doing all the work around the house. Especially I hate to see', 5, 210, width);
 sketch.text('my dad being a lazy couch potato. I decided to help my mom, but my dad finally got up', 5, 235, width);
 sketch.text('just to slap me on the face to remind me that house chores is a women\’s job.” -D.C', 5, 260, width);

 sketch.fill(110, 190, 69);
 sketch.text('"Ever since I moved in with my partner, who is a man, my dad rarely talks to me.', 5, 305, width);
 sketch.text('My mom had visited me few times and always used the same excused that my dad is busy', 5, 330, width);
 sketch.text('at work. My little sister is the only one who tells me the truth, which she told me', 5, 355, width);
 sketch.text('that all those years my dad spend time with me gone to waste because I not settling', 5, 380, width);
 sketch.text('down with a woman." -G.J', 5, 405, width);
}
  }
};

// create the second instance of p5 and pass in the function for sketch 2
new p5(s3);

var s4 = function( sketch ) {

  sketch.setup = function() {
    let canvas4 = sketch.createCanvas(700, 450);
    canvas4.position(40,2000);
  }
  sketch.draw = function() {
    //for canvas 2
    sketch.clear();
    sketch.background(0, 0);
    //sketch.background(233,222,207);
    //sketch.background(233,222,177);

 if (sketch.mouseY < sketch.height/2){
  //description
  sketch.textSize(18);
 //sketch.fill(255, 0, 0);
 //sketch.textAlign(LEFT);
 sketch.textFont("Alegraya");
  //sketch.noStroke();
  sketch.fill(251, 169, 26);
  sketch.text('“It almost about to be a year since my transition to womanhood, my dad\’s still not', 5, 40, width); //+25
  sketch.text('very accepting that I came out as a woman. He still call me "mi hijo" (my son) or', 5, 65, width); //+25
  sketch.text('"el hombre de la casa" (man of the house). Especially he calls me by my old name', 5, 90, width);
  sketch.text('and my old pronouns“ -B.R', 5, 115, width);

 sketch.fill(59, 198, 243);
 sketch.text('“Whenever my dad call me mi hombrecito, it just gives me anxiety because I want to', 5, 160, width); //+25
 sketch.text('come out, but I know it would end up to be a disaster. I\'m his only son and my dad', 5, 185, width);
 sketch.text('expects me to take on the big house roles. I\'m surprised that he doesn\'t realize', 5, 210, width);
 sketch.text('that I rather spend more time with my mom and my older sisters than drinking cheap', 5, 235, width);
 sketch.text('beers with him and his lame machismo friends" -R.U', 5, 260, width);

sketch.fill(110, 190, 69);
 sketch.text('"I hate the word hombrecito because I\'m not ready for big responbilities. I\'m', 5, 305, width);
 sketch.text('only 7 years old and my dad calls me hombrecito gives me chills. I just want to', 5, 330, width);
 sketch.text('enjoy my childhood but my dad forced me to join him with his bornings errands." -K.Q', 5, 355, width);
}

if (sketch.mouseY >= sketch.height/2) {
  //location

 // sketch.fill(255, 255, 0);
 sketch.textSize(18);
 sketch.textFont("Alegraya");
 //sketch.textAlign(LEFT);
 //sketch.noStroke();
 sketch.fill(251, 169, 26);
 sketch.text('“I\'m an only child and I\'m a girl. I know my dad is still upset that I\'m the', 5, 40, width); //+25
 sketch.text('first and only child because my mom cannot have anymore. My dad had this obsession', 5, 65, width);
 sketch.text('and has been raising me as if I were a son. He forced me to join an all boys soccer team,', 5, 90, width);
 sketch.text('but I hate soccer, and call me "mi unico hijo" (my only son). I wish my dad let me', 5, 115, width);
 sketch.text('do what I really want to do, and call me "mi hija" (my daughter)" -E.H ', 5, 140, width);

sketch.fill(110, 190, 69);
 sketch.text('“I know that I should be grateful to have this big role in the family. Beside that', 5, 185, width);
 sketch.text('I\'m the baby out of my two older sisters, I have to do the heavy lifting and the', 5, 210, width);
 sketch.text('paperwork for my dad.” -R.O', 5, 235, width);

 sketch.fill(110, 190, 69);
 sketch.text('“My dad calls me his único hombre de la cass (only man in the house), but he calls', 5, 280, width);
 sketch.text('my sister cabrona (bitch). Let\’s be real, I make a lot of mistakes and my sister has', 5, 305, width);
 sketch.text('a lot of perfection. I don\'t like how my dad treats my sister badly just because', 5, 330, width); 
 sketch.text('she is female, but my dad treats me like royalty because I\'m the man of the house.” -P.D', 5, 355, width); 
}
  }
};


// create the second instance of p5 and pass in the function for sketch 2
new p5(s4);


// create the second instance of p5 and pass in the function for sketch 2
new p5(s5);

var s5 = function( sketch ) {

  sketch.setup = function() {
    let canvas5 = sketch.createCanvas(700, 450);
    canvas5.position(40,2400);
  }
  sketch.draw = function() {
    //for canvas 2
    sketch.clear();
    sketch.background(0, 0);
    //sketch.background(233,222,207);
    //sketch.background(233,222,177);

 if (sketch.mouseY < sketch.height/2){
  //description
  sketch.textSize(18);
 //sketch.fill(255, 0, 0);
 //sketch.textAlign(LEFT);
 sketch.textFont("Alegraya");
  //sketch.noStroke();
  sketch.fill(251, 169, 26);
  sketch.text('“I try to help my boyfriend to open up to me, but he changes the subject or walks away.', 5, 40, width); //+25
  sketch.text('Even the most tragic moment of his life that his own sister passed away due to cancer.', 5, 65, width); //+25
  sketch.text('We were at his sister\'s funeral I did not see a single tear roll down his face.', 5, 90, width);
  sketch.text('I even told him to let it out, but he said that "life goes on and real men don\'t cry“ -P.A', 5, 115, width);

 sketch.fill(110, 190, 69);
 sketch.text('“Last time I cried in my room was when I got a text that my girlfriend, who I truly', 5, 160, width); //+25
 sketch.text('love, broke up with me in text. My dad came in to my room unexpected, and slapped', 5, 185, width);
 sketch.text('my face because men aren\'t supposed to have feelings for anyone" -A.O ', 5, 210, width);

 sketch.fill(110, 190, 69);
 sketch.text('"I remember during kindergarten, I cried on the way home as my mom tried to comfort me', 5, 255, width);
 sketch.text('before we got home. Something unusual happened was my dad waiting for us at the front', 5, 280, width);
 sketch.text('porch. He came up to me and yelled that I not going to be strong if I keep on crying', 5, 305, width);
 sketch.text('He didn\'t even hug me or tell me that everything is going to be okay." -U.L', 5, 330, width);
}

if (sketch.mouseY >= sketch.height/2) {
  //location

 // sketch.fill(255, 255, 0);
 sketch.textSize(18);
 sketch.textFont("Alegraya");
 //sketch.textAlign(LEFT);
 //sketch.noStroke();
 sketch.fill(110, 190, 69);
 sketch.text('“My dad always tells me that real man should not show any feelings because women', 5, 40, width); //+25
  sketch.text('love a brave, strong, and serious man. I always end up being dumped', 5, 65, width); //+25
  sketch.text('because I just never show any feelings toward any girls. Therefore, that leads them', 5, 90, width);
  sketch.text('thinking that I lost or never had interest in them.“ -J.O', 5, 115, width);

 sketch.fill(110, 190, 69);
 sketch.text('“It\'s all fun and games until I hit 13. My dad noticed that I hit puberty and', 5, 160, width); //+25
 sketch.text('he just started to give me sex tips. That when he told me that it\'s okay to sleep', 5, 185, width);
 sketch.text('around with multiple women in one night as long you don\'t catch feelings. I', 5, 210, width);
 sketch.text('never took my dad advice because I know he cheated on my mom a month after I was', 5, 235, width);
 sketch.text('born. It\'s my choice and I know I will be a better man than my dad" -I.R', 5, 260, width);

 sketch.fill(110, 190, 69);
 sketch.text('“I used to fool around with girls until I met the love of my life. I know my dad', 5, 305, width);
 sketch.text('told me to not catch feelings for anyone. But this was the only time that I broke', 5, 330, width);
 sketch.text('my dad\’s advice and it was the best decision I ever made. I became a better person', 5, 355, width);
 sketch.text('for her. I had never felt this way for anyone and I became more open to her,', 5, 380, width);
 sketch.text('which makes my relationship much better." -S.L', 5, 405, width);
}
  }
};


// create the second instance of p5 and pass in the function for sketch 2
new p5(s5);

