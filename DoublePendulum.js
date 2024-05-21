let angleV1 = 0;
let angleV2 = 0;
let len1 = 200;
let len2 = 150;
let m1 = 40;   //mass
let m2 = 40;   //mass
let g = 0.8;   //gravity

function setup() {
  createCanvas(1000, 800);
  origin = createVector (300, 0);
  angle1 = PI/2;
  angle2 = PI/2;
  bob1 = createVector();
  bob2 = createVector();
}

function draw() {
  num1 = -g * (2 * m1 + m2) * sin(angle1);
  num2 = -m2 * g * sin(angle1 - 2 * angle2);
  num3 = -2* sin(angle1 - angle2) * m2;
  num4 = angleV2**2 * len2 + angleV1**2 * len1 * cos(angle1-angle2);
  denom1 = 2 * m1 + m2 - m2 * cos(2 * angle1 - 2 * angle2);
  angleA1 = (num1 + num2 + num3 * num4) / ( len1 * denom1);
  
  num5 = 2 * sin(angle1 - angle2)
  num6 = angleV1**2 * len1 * (m1 + m2) + g * (m1 + m2) * cos(angle1);
  num7 = angleV2**2 * len2 * m2 * cos(angle1 - angle2);
  denom2 = 2 * m1 + m2 - m2 * cos(2 * angle1 - 2 * angle2);
  angleA2 = num5 * ( num6 + num7)/ (len2 * denom2);
  
  background(220);
  angleV1 += angleA1;
  angleV2 += angleA2;
  angle1 += angleV1;
  angle2 += angleV2;
  angleV1 *= 0.9999999;
  angleV2 *= 0.9999999;
  bob1.x = len1 * sin (angle1) + origin.x;
  bob1.y = len1 * cos (angle1) + origin.y;
  bob2.x = bob1.x + len2 * sin (angle2);
  bob2.y = bob1.y + len2 * cos (angle2);
  stroke(255);
  strokeWeight(8);
  fill(0);
  line(origin.x, origin.y, bob1.x, bob1.y);
  line(bob1.x, bob1.y, bob2.x, bob2.y)
  circle (bob1.x, bob1.y, 40)
  circle (bob2.x, bob2.y, 40)
  
}