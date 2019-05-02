var matrix = [];
var h = 30;
var w = 35;
var side = 25;
var grassArr = [];
var grassEaterArr = [];
var grassEaterEaterArr = [];
var sasukeArr = [];
var narutoArr = [];


function setup() {
    noStroke();
    frameRate(5);
    createCanvas(w * side, h * side);
    background('#acacac');


    for (var i = 0; i < h; i++) {
        matrix[i] = [];
        for (var k = 0; k < w; k++) {
            matrix[i][k] = Math.round(random(5));
        }
    }


    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            if (matrix[y][x] == 2) {
                var gr1 = new GrassEater(x, y, 2);
                grassEaterArr.push(gr1);
            }
            if (matrix[y][x] == 3) {
                var gr2 = new GrassEaterEater(x, y, 3);
                grassEaterEaterArr.push(gr2);
            }
            if (matrix[y][x] == 4) {
                var gr3 = new Sasuke(x, y, 4);
                sasukeArr.push(gr3);
            }
            if (matrix[y][x] == 5) {
                var gr4 = new Naruto(x, y, 5);
                narutoArr.push(gr4);
            }
        }
    }

}


function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 0) {
                fill("#acacac");
            }

            else if (matrix[y][x] == 1) {
                fill("green");
            }

            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("#8a2ce8");
            }
            else if (matrix[y][x] == 5) {
                fill("orange");
            }
            rect(x * side, y * side, side, side);


        }
    }

    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in grassEaterEaterArr) {
        grassEaterEaterArr[i].eat();
    }
    for (var i in sasukeArr) {
        sasukeArr[i].eat();
    }
    for (var i in narutoArr) {
        narutoArr[i].eat();
    }
}

