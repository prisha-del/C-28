class Raindrop{
  constructor(width, height){
    this.length = round(random(100));
    this.x = round(random(width));
    this.y = -round(random(height));

    this.drop = function() {      
      line(this.x, this.y, this.x, this.y + this.length);      

      if (this.y < height) {
        this.y += dropSpeed;
      }else {      
        this.x = round(random(width));
        this.y = -round(random(height));
      }
    } // drop function
  } // constructor
} // class


