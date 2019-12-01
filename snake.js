var s;
var em = 20;

var food;


function setup()
{
    createCanvas (600, 600);
    s = new Snake();
    frameRate(10);
    food = createVector(random(width), random(height));
}


function Snake()
{
    this.x = 0;
    this.y = 0;
    this.speedx = 1;
    this.speedy = 0;

    this.dir = function(x, y)
    {
        console.log("kkk");
        this.speedx = x;
        this.speedy = y;
    }

    this.update = function() 
    {
    
        this.x += this.speedx * em;   
        this.y += this.speedy * em;
        if ((this.x < 0) || (this.x > width) || (this.y < 0) || (this.y > height))
        {alert("khserti ya zamel");
        this.x  = width/ 2;
        this.y = height /2;}
    } 
    this.show = function() 
    {
        fill("pink");
        rect(this.x, this.y, em , em);
    }   
}
function draw()
{
    background(51);
    s.update();
    s.show();
    fill("yellow");
    rect(food.x, food.y, em, em);
}
function keyPressed()
{
 
    if (keyCode === LEFT_ARROW)
        s.dir(-1, 0);
    else if (keyCode === RIGHT_ARROW)
        s.dir(1, 0);
    else if (keyCode === UP_ARROW)
        s.dir(0, -1);
    else if (keyCode === DOWN_ARROW)
        s.dir(0, 1);
}