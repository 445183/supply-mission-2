var wall; 

function Wall(x,y,width,height){
   wall=Bodies.rectangle(x,y,width,height,{isStatic:true});
   rectMode(CENTER);
   fill("red");
   rect(x,y,width,height);
   World.add(world,wall);
}
