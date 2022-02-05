function testSize(num) {
    // Only change code below this line
    var temp;
    if (num < 5)
      temp = "Tiny";
    else if (num < 10)
      temp = "Small";
    else if (num < 15)
      temp = "Medium";
    else if (num < 20)
      temp = "Large";
    else
      temp = "Huge";
  
    return temp;
    // Only change code above this line
  }
  
  testSize(7);