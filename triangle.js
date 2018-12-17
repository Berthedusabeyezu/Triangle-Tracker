function triangleTracker(){

    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    var z = parseInt(document.getElementById("z").value);
    if (x ===y && y === z ) {
        alert("Equilateral Triangle");
    }
   
    else if (x === y || x === z || y === z ) {
        alert("Isosceles Triangle");
    }
      else if ((x+y)<=z || (x+z)<=y || (y+z)<=x) {
        alert("THIS IS NOT A Triangle");
    }
      else if (x + y >z || y + z >x || x + z >y ) {
        alert("Scalene Triangle");
    }
   
}
