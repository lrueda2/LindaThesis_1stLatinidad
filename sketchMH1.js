


  var s1 = function( sketch ) {
  sketch.setup = function() {
  let canvas1 = sketch.createCanvas(700, 495);
  canvas1.position(775, 590);
  }

  sketch.draw = function() {
  //for canvas 1
  //sketch.background(233,222,297);
  sketch.clear();
  sketch.background(0, 0);


 if (sketch.mouseIsPressed == true){
  //description
 sketch.textSize(18);
 sketch.textAlign(LEFT);
 sketch.fill(110, 190, 69);
 sketch.textFont("Alegraya");
 sketch.text('“I hate that I have to cry to myself in the shower so no one can hear me. I had cried', 5, 5, width); //+25
 sketch.text('once in front of my parents and they were not as supportive as I wished them to be." -J.T.T', 5, 30, width); //+25
  
 sketch.fill(110, 190, 69);
 sketch.text('"My mental health was neglected and downplayed by my parents growing up which made', 5, 75, width); //+25
 sketch.text('it difficult to communicate with them especially because their English and comprehension', 5, 100, width); //+25
 sketch.text('skills weren’t enough to engage in healthy discussions. The only person I had to', 5, 125, width); //+25
 sketch.text('acknowledge my mental health properly was myself, but it wasn’t until I tried to commit', 5, 150, width); //+25
 sketch.text('suicide at the age of 11 when my parents tried to address my mental health. However,', 5, 175, width); //+25
 sketch.text('the conversations didn’t get better or get established yet it didn’t stop them from trying', 5, 200, width); //+25
 sketch.text('which meant a particular way they helped or tried to help was to put into a mental', 5, 225, width); //+25
 sketch.text('hospital without having a proper conversation about how I was feeling or why I would', 5, 250, width); //+25
 sketch.text('want to try to make the decision I tried to make.” -G.N', 5, 275, width); //+25
}

else {
  //location

 // sketch.fill(255, 255, 0);
 sketch.textSize(18);
 sketch.textAlign(LEFT);
 //sketch.noStroke();
 sketch.textFont("Alegraya");
 sketch.fill(110, 190, 69);
 sketch.text('“My dad always tells me to man up because real men don’t seek help." -M.H', 5, 5, width); //+45

  sketch.fill(110, 190, 69);
  sketch.text('I understand that my dad grew up with a harsh expectation that men should not cry', 5, 50, width); //+25
  sketch.text('and have to suck it up. I don\'t know how my dad can live like this for so long because I', 5, 75, width); //+25
  sketch.text('can\'t live like this anymore. I had to lied to my dad that I had joined the soccer', 5, 100, width); //+25
  sketch.text('team, but to be honest, I was going to see my psychologist." -J.M', 5, 125, width); //+45
  
  sketch.fill(110, 190, 69);
  sketch.text('I hate that my parents are more supportive towards my little sister. They would give', 5, 170, width); //+25
  sketch.text('their attention and comfort towards her. They never cared for me because they', 5, 195, width); //+25
  sketch.text('ignored my body language when I feel at my lowest. They always tell me I\'m the big', 5, 220, width); //+25
  sketch.text('brother and I must be brave and handle things on my own. Until now, I realize', 5, 245, width); //+45
  sketch.text('this isn\'t something that can be done on its own" -B.R', 5, 270, width); //+45
}

 }
};

// create a new instance of p5 and pass in the function for sketch 1
new p5(s1);


var s2 = function( sketch ) {

  sketch.setup = function() {
    let canvas2 = sketch.createCanvas(735, 495);
    canvas2.position(775,1050);
  }
  sketch.draw = function() {
    //for canvas 2
    //sketch.background(233,222,237);
    sketch.clear();
    sketch.background(0, 0);
 if (sketch.mouseIsPressed == true){
  //description
  sketch.textSize(18);
 //sketch.fill(255, 0, 0);
 sketch.textAlign(LEFT);
 //sketch.noStroke();
 sketch.textFont("Alegraya");
 //sketch.text('“The first time my anxiety kicks in during a family function, everyone thought I was', 5, 5, width); //+25
 //sketch.text('overracting and calls me a drama queen. It hurts that they they don\'t know how I acutally', 5, 30, width); //+25
 //sketch.text('feel or ask me if I was okay. - M.R', 5, 55, width); //+45
 sketch.fill(251, 169, 26);
 sketch.text('“When opened up to my parents that I been dealing with depression, the first thing my mom', 5, 100, width); //+25
 sketch.text('did was throw holy water at me. She\'s very religious and grew up in a catholic household', 5, 125, width); //+25
 sketch.text('she believes it\'s a sign that the devil is inside of me. I wish she would stop worshiping', 5, 150, width); //+25
 sketch.text('something that isn\'t real and snap back to reality for to help me get through this.', 5, 175, width); //+25
 sketch.text('I need support because I think I can\’t go through this alone." -I.F', 5, 200, width); //+25

 sketch.fill(251, 169, 26);
 sketch.text('“Most of the time, I\'m very concerned about my mom\'s brujeria (witch craft). She takes', 5, 245, width); //+25
 sketch.text('those things very seriously as it\'s her belief. I would need my mom to be that person I can', 5, 270, width); //+25
 sketch.text('reach out to for help. When I told her that I needed mental support, the first thing she', 5, 295, width); //+25
 sketch.text('did was doing a cleanse to release the evil spirits out of my body. My mom\’s been doing', 5, 320, width); //+25
 sketch.text('this everyday, but those feelings and thoughts haven\'t disappeared" - ', 5, 345, width); //+25
}
else {
  //location

 // sketch.fill(255, 255, 0);
 sketch.textSize(18);
 sketch.textAlign(LEFT);
 sketch.textFont("Alegraya");
 sketch.fill(251, 169, 26);
 sketch.text('“I remember my mom telling me scary stories, which are supposed to be true, such as', 5, 5, width);
 sketch.text('La Llorana when I was 5 years old. My mom told me that she had heard weird sounds', 5, 30, width);
 sketch.text('when she lived in Mexico. When I hit the age of 15, I started to feel very upset that I had to', 5, 55, width);
 sketch.text('cry out. I remembered crying so much that my eyes were very puffy. My mom', 5, 80, width);
 sketch.text('thought that telling me those stories that I actually became La Llorana. I don\'t know why I', 5, 105, width);
 sketch.text('had been feeling like that for weeks until I went to my doctor to fix this problem. My', 5, 130, width);
 sketch.text('doctor told me that I need to go to a psychiatrist because it sound that I was dealing with', 5, 155, width);
 sketch.text('stress that may lead to anxiety and later on, could lead to depression. My mom gave', 5, 180, width);
 sketch.text('a weird look because she thought my doctor was making things up" -K.G', 5, 205, width);

 sketch.fill(110, 190, 69);
 sketch.text('“I hate when my dad doesn\'t take my mental health seriously. He always tells me that I\'m', 5, 250, width); //+25
 sketch.text('physically healthy, smart, handsome, and strong. I had a mental breakdown in my room', 5, 275, width); //+25
 sketch.text('one time. My dad said "that I\'m living in a make believe world. Meanwhile I heard one', 5, 300, width); //+25
 sketch.text('of his conversation with his friends, talking about a devil that been going around.', 5, 325, width); //+25
 sketch.text('He rather hear that lame make believe story than help me out." -K.R', 5, 350, width); //+25
}

  }
};

// create the second instance of p5 and pass in the function for sketch 2
new p5(s2);

var s3 = function( sketch ) {

  sketch.setup = function() {
    let canvas3 = sketch.createCanvas(745, 520);
    canvas3.position(775,1515);
  }

  sketch.draw = function() {
    //for canvas 2
    //sketch.background(233,222,237);
    sketch.clear();
    sketch.background(0, 0);
 if (sketch.mouseIsPressed == true){
  //description
  sketch.textSize(18);
 //sketch.fill(255, 0, 0);
 sketch.textAlign(LEFT);
 //sketch.noStroke();
 sketch.textFont("Alegraya");
 sketch.fill(110, 190, 69);
 sketch.text('“First time that I felt this feeling was when I was 14 years old. I didn\'t know what was', 5, 5, width); //+25
 sketch.text('going on with me. I thought it would go away, but it didn\'t. I told my mom about it and she', 5, 30, width); //+25
 sketch.text('told me that it\’d get better later on. 12 years later, I just found out what was going', 5, 55, width); //+25
 sketch.text('on with me and I\'m getting the treatment that I needed. I wished I know this sooner so my', 5, 80, width); //+45
 sketch.text('life could\’ve been better." -L.B', 5, 105, width); //+45

 sketch.fill(110, 190, 69);
 sketch.text('“I always thought that life isn\'t fair because my dad told me on how life can be rough on', 5, 150, width); //+25
 sketch.text('people like me and my dad. I had to work 3 times harder and I don\'t rely on others for help,', 5, 175, width); //+25
 sketch.text('but I feel that there\'s something I need help with. I had been feeling overwhelmed and', 5, 200, width); //+25
 sketch.text('sad for most days. When I got myself checked out from my doctor appointment, I was', 5, 225, width); //+25
 sketch.text('diagnosed with depression. I told my dad about it, but he told me that we have to live with', 5, 250, width); //+25
 sketch.text('it. He doesn\'t want to tell me he was suffering from it too until my mom told me that he had', 5, 275, width); //+25
 sketch.text('it for so long that he doesn\'t want to get it checked out. That\'s explains why my dad always', 5, 300, width); //+25
 sketch.text('look tough because he had been hiding it from me." -A.D', 5, 325, width); //+25

 sketch.fill(110, 190, 69);
 sketch.text('“I\'m a third year student, studying psych. It upset me that my parents never told me about', 5, 370, width); //+25
 sketch.text('mental health only because you can\'t see it from the outside. Three years of studying and I', 5, 395, width); //+25
 sketch.text('started to notice that my father had been hiding his emotions for too long. Growing up', 5, 420, width); //+25
 sketch.text('I never in my life heard about how he was feeling. It was either me or my mom telling about', 5, 445, width); //+25
 sketch.text('how day went. Especially he lashed out at me and my mom when we "complained" on how', 5, 470, width); //+25
 sketch.text('hard life can be. He told us just to suck it up" -D.G', 5, 495, width); //+25
}

else {
  //location
 // sketch.fill(255, 255, 0);
 sketch.textSize(18);
 sketch.textAlign(LEFT);
 sketch.textFont("Alegraya");
 sketch.fill(110, 190, 69);
 sketch.text('“I know that my dad is suffering in silence because on how he behave toward my mom.', 5, 5, width);
 sketch.text('My mom always comes home and talks about how her day went. One day, I', 5, 30, width);
 sketch.text('remembered that she came home crying because a rude customer treated her badly', 5, 55, width);
 sketch.text('Instead of comforting her, like every husband should do for their wives, he just', 5, 80, width);
 sketch.text('snapped at my mom. He told her that\'s how the work life is whether she likes it or not', 5, 105, width);
 sketch.text('My dad isn\'t the go to person when it comes to advice or needing support.', 5, 130, width);
 sketch.text('Especially that he isn\'t a bright role model that I should look up to, but he did help', 5, 155, width);
 sketch.text('me to be a better version of myself by seeking help on my own. I don\'t know how', 5, 180, width);
 sketch.text('my dad could bottle up these emotions cause I can\'t handle it." - ', 5, 205, width);

 sketch.fill(110, 190, 69);
 sketch.text('“Everyone sees me as Mr. Perfection. I get good grades, I\'m very athletic, I\'m attending', 5, 250, width); //+25
 sketch.text('my dream school, and a good looking guy. A year ago, my friends wondered how', 5, 275, width); //+25
 sketch.text('I don\'t feel exhausted when I\'m involved with so many things such as school activities', 5, 300, width); //+25
 sketch.text('and work part-time. I had keep personal things to myself, like I had thought', 5, 325, width); //+25
 sketch.text('about harming myself. I had told my dad about it and that I needed help. My dad told me', 5, 350, width); //+25
 sketch.text('that I need to keep myself very occupied so I can forget about those thoughts.', 5, 375, width); //+25
 sketch.text('A year later, I decided to seek help and it was the best decision I ever made." - C.A', 5, 400, width); //+25
}

  }
};

// create the second instance of p5 and pass in the function for sketch 2
new p5(s3);


var s4 = function( sketch ) {

  sketch.setup = function() {
    let canvas4 = sketch.createCanvas(735, 495);
    canvas4.position(775,2125);
  }

  sketch.draw = function() {
    //for canvas 4
    //sketch.background(233,222,237);
    sketch.clear();
    sketch.background(0, 0);
 if (sketch.mouseIsPressed == true){
  //description
  sketch.textSize(18);
 //sketch.fill(255, 0, 0);
 sketch.textAlign(LEFT);
 //sketch.noStroke();
 sketch.textFont("Alegraya");
 sketch.fill(251, 169, 26);
 sketch.text('“The first time my anxiety kicked in was during a family event, everyone thought I was', 5, 5, width); //+25
 sketch.text('overreacting and called me a drama queen. It hurts that they they don\'t know how I actually', 5, 30, width); //+25
 sketch.text('feel or ask me if I am okay. -M.R', 5, 55, width); //+45

 sketch.fill(251, 169, 26);
 sketch.text('“I was on my way to meet my boyfriend\'s parents. I was too anxious and I felt that I', 5, 100, width); //+25
 sketch.text('coudln\'t breathe. I called my boyfriend that I wasn\'t feeling good, and he knows', 5, 125, width); //+25
 sketch.text('I have anxiety. He told me that he will handle everything. When I arrived to his parents', 5, 150, width); //+25
 sketch.text('place, They gave me a stare and I knew something was off with me. During dinner,', 5, 175, width); //+25
 sketch.text('his parents asked me so many questions that I couldn\’t function right. Therefore, my', 5, 200, width); //+25
 sketch.text('anxiety kicked in and my boyfriend\'s parents told him that he should break up', 5, 225, width); //+25
 sketch.text('with me because I was crazy. Thankfully, he stood by me and talked to them about my', 5, 250, width); //+25
 sketch.text('mental health. To this day, they still won\'t accept me after that disaster." - K.L', 5, 275, width); //+25

 sketch.fill(110, 190, 69);
 sketch.text('Having bipolar is really tough. People never know when a mood switch happens. Even', 5, 320, width); //+25
 sketch.text('I don\'t know when I switch mood and I cannot even control myself to behave', 5, 345, width); //+25
 sketch.text('My parents don\'t want to get near me because they\'re scared of me and my random', 5, 370, width); //+25
 sketch.text('mood switches. They don\'t invite me to eat with them, watch tv, or even take', 5, 395, width); //+25
 sketch.text('me out to run errands. They see me as if I\'m some kind of monster" -O.G', 5, 420, width); //+25
}
else {
  //location

 // sketch.fill(255, 255, 0);
 sketch.textSize(18);
 sketch.textAlign(LEFT);
 sketch.textFont("Alegraya");
 sketch.fill(251, 169, 26);
 sketch.text('“I was about to celebrate my one month anniversary with my boyfriend. He told me', 5, 5, width);
 sketch.text('he has a surprise for me. I was very excited about where we were going to go. We went', 5, 30, width);
 sketch.text('to a concert that I\'ve been dying to see. I was having a great time until I started to', 5, 55, width);
 sketch.text('see things. I was freaking out because the hallucation was starting to act up and I had not', 5, 80, width);
 sketch.text('told my boyfriend about it. He noticed something was wrong, so he took me out', 5, 105, width);
 sketch.text('to get fresh air. That\’s when I started to tell him something that I should\’ve told him', 5, 130, width);
 sketch.text('in the very beginning. I told him I was diagnosed with schizophrenia when I was 10', 5, 155, width);
 sketch.text('years old. At first I thought he would understand because he gave me a ride back home. I', 5, 180, width);
 sketch.text('assume he dumped me because he hasn\'t called me since the incident', 5, 205, width);
 sketch.text('happened a month ago." -P.T', 5, 230, width);

 sketch.fill(251, 169, 26);
 sketch.text('“I was bullied, and still am, when my anxiety attacks kick in by my own family. I was', 5, 275, width); //+25
 sketch.text('hoping for them to be very supportive, but they called me cry baby or that I\'m', 5, 300, width); //+25
 sketch.text('such a sucker for attention. It sucks that I don\'t have someone to talk to in my own', 5, 325, width); //+25
 sketch.text('home, but my best friend\'s parents are very supportive of me. They even set me', 5, 350, width); //+25
 sketch.text('an appointment with a psychologist. When my parents heard about it, they told me "why', 5, 375, width); //+25
 sketch.text('on earth someone would help a crazy person like me?"" -Y.F', 5, 400, width); //+25
}

  }
};

// create the second instance of p5 and pass in the function for sketch 2
new p5(s4);


var s5 = function( sketch ) {

  sketch.setup = function() {
    let canvas5 = sketch.createCanvas(735, 495);
    canvas5.position(775,2675);
  }

  sketch.draw = function() {
    //for canvas 5
    //sketch.background(233,222,237);
    sketch.clear();
    sketch.background(0, 0);
 if (sketch.mouseIsPressed == true){
  //description
  sketch.textSize(18);
 //sketch.fill(255, 0, 0);
 sketch.textAlign(LEFT);
 //sketch.noStroke();
 sketch.textFont("Alegraya");
 sketch.fill(110, 190, 69);
 sketch.text('“I had an group assignment for my AP psychology to do a project on mental health.', 5, 5, width); //+25
 sketch.text('I was on a video call with my group working on the project. I assume that my mom was', 5, 30, width); //+25
 sketch.text('eavesdropping because she broke in my room just to tell me to stop talking nonsense', 5, 55, width); //+25
 sketch.text('or talk about it outside of the house. I had to do my work in starbucks or', 5, 80, width); //+45
 sketch.text('at a library." -G.T', 5, 105, width); //+45

 sketch.fill(251, 169, 26);
 sketch.text('“I was in my first year at college when I was dealing with depression. At first, I', 5, 150, width); //+25
 sketch.text('thought I was feeling homesick since I never left my home. I came back home for', 5, 175, width); //+25
 sketch.text('the holidays, which I thought would be a good time to speak up. I was helping my', 5, 200, width); //+25
 sketch.text('mom out for Christmas even. That when I told her that I was diagnosed with', 5, 225, width); //+25
 sketch.text('depression. My own mom told me to shut up and we should never discuss this again" -P.J.R', 5, 250, width); //+25

 sketch.fill(251, 169, 26);
 sketch.text('“At first, I didn\’t know the reason why my older sister passed away. My parents asked', 5, 295, width); //+25
 sketch.text('me why? I was 4 years old when my sister, who was 16, passed away. Now I\'m 14,', 5, 320, width); //+25
 sketch.text('I called my mom for a talk. When I asked my mom about my sister, my mom changed', 5, 345, width); //+25
 sketch.text('the topic. Until, my older cousin, who is the same age as my sister, told me', 5, 370, width); //+25
 sketch.text('the truth. She explained that my sister committed suicide, which was linked to her battle', 5, 395, width); //+25
 sketch.text('depression. Though, my parents been telling people she was in a car crash" -J.G', 5, 420, width); //+25
}
else {
  //location

 // sketch.fill(255, 255, 0);
 sketch.textSize(18);
 sketch.textAlign(LEFT);
 sketch.textFont("Alegraya");
 sketch.fill(251, 169, 26);
 sketch.text('“I\'m a blogger and one time I had posted a video on my Youtube channel on how I manage', 5, 5, width);
 sketch.text('to live on with depression. I talked about methods I do, my healthy daily routine,', 5, 30, width);
 sketch.text('and resources to reach out if my audience needs someone to talk to or seek help. It was', 5, 55, width);
 sketch.text('going well, until my mom had a serious talk with me. She was upset to hear from', 5, 80, width);
 sketch.text('my cousins that I was very open to talk about depression to the public eye. My mom had', 5, 105, width);
 sketch.text('demanded me to take down the video because everyone in my family was going to', 5, 130, width);
 sketch.text('see it and say I\'m a shame to the family. I\'m very ashamed that my own mom see me as a', 5, 155, width);
 sketch.text('burden. I wished my mom would take my side for once and see that my family are', 5, 180, width);
 sketch.text('just ignorant" -N.Q', 5, 205, width);

 sketch.fill(110, 190, 69);
 sketch.text('“I always love to spend time at my grandparents place in Mexico and spending time with', 5, 250, width); //+25
 sketch.text('my abuelo(grandpa). It was 2 years since my abuelo passed away, which my life hasn\'t', 5, 275, width); //+25
 sketch.text('been the same without him. I even feel my life is empty without him, that I', 5, 300, width); //+25
 sketch.text('don\'t remember a time I was happy since then. I wanted to talk to my abuela(grandma)', 5, 325, width); //+25
 sketch.text('but my parents told me talking about depression isn\'t allowed. Especially that', 5, 350, width); //+25
 sketch.text('my abuela is just recovering from the loss of my abuelo." -K.R.R', 5, 375, width); //+25
}

  }
};

// create the second instance of p5 and pass in the function for sketch 2
new p5(s5);


var s6 = function( sketch ) {

  sketch.setup = function() {
    let canvas6 = sketch.createCanvas(735, 495);
    canvas6.position(775,3175);
  }

  sketch.draw = function() {
    //for canvas 5
    //sketch.background(233,222,237);
    sketch.clear();
    sketch.background(0, 0);
 if (sketch.mouseIsPressed == true){
  //description
  sketch.textSize(18);
 //sketch.fill(255, 0, 0);
 sketch.textAlign(LEFT);
 //sketch.noStroke();
 sketch.textFont("Alegraya");
 sketch.fill(110, 190, 69);
 sketch.text('“When my mom was diagnosed with diabetes, I was on my mom side by making sure', 5, 5, width); //+25
 sketch.text('that she took it seriously. I managed her diet plan and her medications.', 5, 30, width); //+25
 sketch.text('When I was diagnosed with mild depression, my doctor told me that it requires', 5, 55, width); //+25
 sketch.text('a lot of medications and therapy. However, my mom didn\'t think about it', 5, 80, width); //+45
 sketch.text('she\’d leave me to work alone" -J.V', 5, 105, width); //+45

 sketch.fill(251, 169, 26);
 sketch.text('“I was an intern at a psychologist on my campus. When I arrived home for summer,', 5, 150, width); //+25
 sketch.text('I asked if I can use my mom and dad to be in a study. They both agreed to the', 5, 175, width); //+25
 sketch.text('study. When I finished the process I noticed my dad has bipolar disorder symptoms,', 5, 200, width); //+25
 sketch.text('my dad thought I was doing wrong. I took him to get checked out and surprisingly I was', 5, 225, width); //+25
 sketch.text('right, but he doesn\'t want to get helped" - F.M', 5, 250, width); //+25
 
 sketch.fill(110, 190, 69);
 sketch.text('“I was only 11 years old when I was diagnosed with bipolar. My doctor recommend me', 5, 295, width); //+25
 sketch.text('to get medications and seek a therapist. Though my mom decided that it was', 5, 320, width); //+25
 sketch.text('best if I did not take the medication. Though my doctor had warned hear that my', 5, 345, width); //+25
 sketch.text('condition would get far worse, my mom still did not listen to them." -A.T', 5, 370, width); //+25
}
else {
  //location

 // sketch.fill(255, 255, 0);
 sketch.textSize(18);
 sketch.textAlign(LEFT);
 sketch.textFont("Alegraya");
 //sketch.noStroke();
 sketch.fill(110, 190, 69);
 sketch.text('“I was 18 when I was seeking help to overcome my depression. I knew that', 5, 5, width);
 sketch.text('I was on my own because I\'m an responsible adult who takes care of my', 5, 30, width);
 sketch.text('own health. My mom noticed I\’d been taking medication all the time, which', 5, 55, width);
 sketch.text('she told me that when I\'m taking meds I was addicted to drugs. My', 5, 80, width);
 sketch.text('mom still doesn\'t understand that I would like words of encouragement instead', 5, 105, width);
 sketch.text('she shames me. My mom then told me that there\'s people dying of cancer,', 5, 130, width);
 sketch.text('it\'s obvious to notice someone living with cancer. As with depression, it is', 5, 155, width);
 sketch.text('all in my head that you need to stop being addicted to drugs." -C.R', 5, 180, width);

 sketch.fill(110, 190, 69);
 sketch.text('“I been hiding my anti-depression medications from my dad because he does not', 5, 225, width); //+25
 sketch.text('believe in the whole mental health practice. Then, my dad found my', 5, 250, width); //+25
 sketch.text('meds when I forgot them in the car. He yelled at me for not being a man and that', 5, 275, width); //+25
 sketch.text('I need to stop in believing what those crazy doctors tell me" -H.R', 5, 300, width); //+25
}
  }
};

// create the second instance of p5 and pass in the function for sketch 2
new p5(s6);



//"I found myself just like, ‘Do I really belong here?’”
var s7 = function( sketch ) {

  sketch.setup = function() {
    let canvas7 = sketch.createCanvas(735, 495);
    canvas7.position(775,3680);
  }

  sketch.draw = function() {
    //for canvas 7
    //sketch.background(233,222,237);
    sketch.clear();
    sketch.background(0, 0);
 if (sketch.mouseIsPressed == true){
  //description
  sketch.textSize(18);
 //sketch.fill(255, 0, 0);
 sketch.textAlign(LEFT);
 //sketch.noStroke();
 sketch.textFont("Alegraya");
 sketch.fill(110, 190, 69);
 sketch.text('“I\'m an exchange student from Honduras, and was the first in my family to come to', 5, 5, width); //+25
 sketch.text('America for a higher education. I did not belong in a good school back home', 5, 30, width); //+25
 sketch.text('because it was for the upper class. I still feel that I still don\'t belong here because', 5, 55, width); //+45
 sketch.text('I\'m an outsider in a country that I wasn\'t born in." -J.G', 5, 80, width); //+45

 sketch.fill(251, 169, 26);
 sketch.text('“I\'m one of the few femlaes in the Engineer class, but I\'m also the only Latina" - ', 5, 125, width); //+25

 sketch.fill(110, 190, 69);
 sketch.text('My parents never got a higher education because their parents couldn\'t afford to', 5, 170, width); //+25
 sketch.text('send them to school. Especially since they dropped out of highschool to support', 5, 195, width); //+25
 sketch.text('the family. Now I\'m the only one in my family to go college, I see that I\'m an outsider. I', 5, 220, width); //+25
 sketch.text('had compared myself to my peers, and I\’m just not like them. I don\'t have the', 5, 245, width); //+25
 sketch.text('latest phone, my own laptop, or preppy clothes. My peers even looked at me as', 5, 270, width); //+25
 sketch.text('if I was some kind of alien." - M.O', 5, 295, width); //+25

 sketch.fill(110, 190, 69);
 sketch.text('“I know that my parents came here to give me a better life. They crossed the borders', 5, 340, width); //+25
 sketch.text('just to get me where I am my foot on. Going to an Ivy League school may be a', 5, 365, width); //+25
 sketch.text('huge deal because not a lot of people like me get this opportunity. But, do I really', 5, 390, width); //+25
 sketch.text('deserve to be here. I\'m not as smart as what people think of me. Especially', 5, 415, width); //+25
 sketch.text('since I break down when I see a problem that can\'t be solved" -D.A', 5, 440, width); //+25
}
else {
  //"I found myself just like, ‘Do I really belong here?’”

 // sketch.fill(255, 255, 0);
 sketch.textSize(18);
 sketch.textAlign(LEFT);
 sketch.textFont("Alegraya");
 //sketch.noStroke();
 sketch.fill(251, 169, 26);
 sketch.text('“I only came to America because my aunt wanted me to be the big sister for my little', 5, 5, width);
 sketch.text('cousin. We may be at different ages, but we still met up in recess. When', 5, 30, width);
 sketch.text('my cousin introduced me to her friends, I saw they were very different from me in', 5, 55, width);
 sketch.text('many ways. I even saw that my little cousin blend in with them not because', 5, 80, width);
 sketch.text('she\’s born in America, rather she\'s blonde with very light skin. I\'m very dark', 5, 105, width);
 sketch.text('skin and only dark skinned person in school." -M.R', 5, 130, width);

 sketch.fill(110, 190, 69);
 sketch.text('"I wish that my parents didn\'t came to America. Maybe my life would\’ve been', 5, 175, width);
 sketch.text('easier if they raised me in Mexico. At this moment, I can\'t even understand science', 5, 200, width);
 sketch.text('I tried to ask my parents for help, but all my homework is in English.', 5, 225, width);
 sketch.text('I\'m really on my own that at times I just can\'t do this anymore." -J.T', 5, 250, width); //+25

 sketch.fill(251, 169, 26);
 sketch.text('"I was working on this project for the computer science part of it, and I just', 5, 295, width); //+25
 sketch.text('broke down into tears because I just didn’t think I could do it. I felt', 5, 320, width); //+25
 sketch.text('like I was the only one who did not know what to do." -L.G', 5, 345, width); //+25
}

  }
};

// create the second instance of p5 and pass in the function for sketch 2
new p5(s7);

//“Impostor feelings are often racialized and linked to feelings of anxiety because of the stereotypes often associated with their race”
var s8 = function( sketch ) {

  sketch.setup = function() {
    let canvas8 = sketch.createCanvas(735, 495);
    canvas8.position(775,4255);
  }

  sketch.draw = function() {
    //for canvas 8
    //sketch.background(233,222,237);
    sketch.clear();
    sketch.background(0, 0);
 if (sketch.mouseIsPressed == true){
  //description
  sketch.textSize(18);
 //sketch.fill(255, 0, 0);
 sketch.textAlign(LEFT);
 //sketch.noStroke();
 sketch.textFont("Alegraya");
 sketch.fill(110, 190, 69);
 sketch.text('“I had no intentions of getting in, like, at all because it’s an Ivy League', 5, 5, width); //+25
 sketch.text('university, and the competition was so high. I just didn’t even see myself as having', 5, 30, width); //+25
 sketch.text('a chance at getting in," -K.R', 5, 55, width); //+45

 sketch.fill(251, 169, 26);
 sketch.text('"I think that leaders, such as managers, have to tap into empathy in some capacity,', 5, 100, width); //+25
 sketch.text('and they have to willing to admit that within the Latinx community, but', 5, 125, width); //+25
 sketch.text('mostly Latinas have struggled and do struggle in the workplace." -V.M', 5, 150, width); //+45

 sketch.fill(251, 169, 26);
 sketch.text('"I remember feeling both excited to be in those spaces, and also feeling like I didn’t', 5, 195, width); //+25
 sketch.text('belong, specifically around language. I always felt like I had a strong accent', 5, 220, width); //+25
 sketch.text('or I didn’t know the academic words for certain things. So over time, my mom always told', 5, 245, width); //+25
 sketch.text('me the expression ‘fake it till you make it,’ so that’s what I did.” -K.R', 5, 270, width); //+25

 sketch.fill(251, 169, 26);
 sketch.text('"I have a better understanding that we were not put in this world to just do one thing. We', 5, 295, width); //+25
 sketch.text('are multi-faceted human beings that can hold different positions, different emotions,', 5, 320, width); //+25
 sketch.text('different dreams and aspirations throughout our long life." -M.G.B', 5, 345, width); //+25
}
else {
  //location

 // sketch.fill(255, 255, 0);
 sketch.textSize(18);
 sketch.textAlign(LEFT);
 sketch.textFont("Alegraya");
 sketch.fill(110, 190, 69);
 sketch.text('“I never felt a sense of maybe student government is right for me. Maybe I should', 5, 5, width);
 sketch.text('try to run for [an executive board position], and I guess that was partly', 5, 30, width);
 sketch.text('because I didn’t see that many faces that were minorities in the student government', 5, 55, width);
 sketch.text('body. I felt like a little bit of an outsider. I felt like maybe I might have', 5, 80, width);
 sketch.text('to prove myself a little more just to make an impact on the student body." -M.A', 5, 105, width);

 sketch.fill(251, 169, 26);
 sketch.text('"I faced some people questioning whether I deserved to be at Cornell, and I face that', 5, 150, width);
 sketch.text('even today with med school, with people trying to interrogate you based on your', 5, 175, width);
 sketch.text('background. The other day, a co-worker asked me about my GPA and asked, ‘Aren’t you', 5, 200, width);
 sketch.text('one of those ethnic, those first-gen kids?’” -J.O', 5, 225, width);
 //sketch.text('so I can watse ', 5, 80, width);

 sketch.fill(110, 190, 69);
 sketch.text('“I got a full ride scholarship to play soccer for the college I\'m attending. One day', 5, 270, width); //+25
 sketch.text('I had a bad day that I wasn\'t functioning right during soccer practice. Until', 5, 295, width); //+25
 sketch.text('this white guy shouted saying "you\'re here because this is your sport and you\'re already', 5, 320, width); //+25
 sketch.text('screwing the team up" -F.A', 5, 345, width); //+25
}

  }
};

// create the second instance of p5 and pass in the function for sketch 2
new p5(s8);