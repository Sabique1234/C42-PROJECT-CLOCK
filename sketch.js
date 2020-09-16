//ASSIGNING VARIABLES
var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    //CREATING THE CANVAS, IN WHICH THE CLOCK WILL BE VISIBLE
    createCanvas(400,400); 
    
    angleMode(DEGREES);   
}

function draw(){
    //BACKGROUND COLOR AS BLACK
    background(0);

    translate(200,200)
    rotate(-90)

    hr = hour();
    mn = minute();
    sc = second();

    //The map() function converts one range (0-60 seconds in a minute) |
    // to another range (0-360 degrees in a circle).
    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)

    //SECOND HAND
    push();
    rotate(scAngle);
    stroke(0,200,255);
    strokeWeight(7);
    line(0,0,100,0);
    pop()
    //push() and pop() functions to implement settings for the required hands only


    //MINUTE HAND
    push();
    rotate(mnAngle);
    stroke("FFFFFF");
    strokeWeight(7);
    line(0,0,75,0);
    pop();
    //push() and pop() functions to implement settings for the required hands only


    //HOUR HAND
    push();
    rotate(hrAngle);
    stroke("#00FF00");
    strokeWeight(7);
    line(0,0,50,0);
    pop();
    //push() and pop() functions to implement settings for the required hands only




    stroke(255,0,255);
    point(0,0)

    strokeWeight(10);
    noFill();



    //ARC FOR  SECOND  
    stroke(0,200,255);
    arc(0,0,290,290,0,scAngle);

    //ARC FOR MINUTE
    stroke("#FFFFFF");
    arc(0,0,270,270,0,mnAngle);

    //ARC FOR HOUR
    stroke("#00FF00");
    arc(0,0,255,250,0,hrAngle);
    
}