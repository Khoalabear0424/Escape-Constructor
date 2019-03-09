// 1. 

// a Shape constructor has a name

// 	sides property

function Shape(n,s){
    this.name = n;
    this.sides = s;
}

// 		number of sides
// 2.

function Rectangle(n,h,w){
    this.height = h;
    this.width = w;
    Shape.call(this,n,4);
}

Rectangle.prototype = Object.create(Shape.prototype);
// a Rectangle is a shape
	
// 	height

// 	width

// on the Rectangle's prototype 

Rectangle.prototype.area = function(){
    var height = parseInt(this.height);
    var width = parseInt(this.width);
    var area = height*width;
    return area;
}

// 	an area function

// 	a perimeter function

Rectangle.prototype.perimeter = function(){
    var height = parseInt(this.height);
    var width = parseInt(this.width);
    var perimeter = (2*height)+(2*width);
    return perimeter;
}

// make sure to connect the Rectangle and the Shape

// 3. 

// a Square is a Rectangle

function Square(n,h){
    Rectangle.call(this,n,h,h);
}
// 	but if the height and width are different then set the width to be the height 

Square.prototype = Object.create(Rectangle.prototype);

// var newSquare = new Square('s1',5);
// console.log(newSquare.area());

// var newRect = new Rectangle('s1',8,8);
// console.log(newRect.perimeter());