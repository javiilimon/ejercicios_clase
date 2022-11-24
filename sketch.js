function setup(){
  createCanvas(200, 200);
  background('grey');
  }
  function draw(){
      fill(125);
  rect(90,90, 25,25);
  
  
  if(mouseX<100 && mouseY<100){
      fill('blue');
  }else if(mouseX>100 && mouseY<100){
      fill('yellow');
  }else if(mouseX>100 && mouseY>100){
      fill('green');
  } else if(mouseX<100 && mouseY>100){
      fill('purple');
  }
  
  ellipse(mouseX,mouseY, 25,25);
  
  }