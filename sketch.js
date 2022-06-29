const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1;
var block2;
var block3;
var plane;

function preload() {}

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();

  world = engine.world;

  //especificacoes
  var block1_options = {
    restitution: 0.8,
    frictionAir: 0.02
  };

  var block2_options = {
    restitution: 0.5,
    frictionAir: 0.01
  };

  var block3_options = {
    isStatic: true
  };

  var plane_options = {
    isStatic: true
  };

  //Crie os Corpos Aqui.

  block1 = Bodies.circle(400, 30, 50, block1_options);
  World.add(world, block1);

  block2 = Bodies.rectangle(100, 30, 90, 90, block2_options);
  World.add(world, block2);

  block3 = Bodies.rectangle(580, 300, 350, 30, block3_options);
  World.add(world, block3);

  plane = Bodies.rectangle(150, 800, 3000, 300, plane_options);
  World.add(world, plane);

  Engine.run(engine);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background('Bisque');
  Engine.update(engine);

  fill('DarkKhaki');
  ellipse(block1.position.x, block1.position.y, 50);
  fill('LightPink');
  rect(block2.position.x, block2.position.y, 90, 90);
  fill('CadetBlue');
  rect(block3.position.x, block3.position.y, 350, 30);
	fill('Tan');
	rect(plane.position.x, plane.position.y, 3000, 300)

  drawSprites();
}
