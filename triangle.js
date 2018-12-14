function triangleTracker(){

    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    var z = parseInt(document.getElementById("z").value);
    if (x ===y && y === z && z === x) {
        alert("Equilateral Triangle");
    }
    else if (x === y || x === z || y === z ) {
        alert("Isosceles Triangle");
    }    
}