let canvas = document.getElementById('gamelaixe');
let ctx = canvas.getContext('2d');
let car = new Car(10, 250, 100, 50, 10);
let obstacle = new Obstacle(10,500,50, 15)
car.drawCar(ctx);


function move() {
    switch (event.keyCode) {
        case 37: {
            car.moveLeft();
            break
        }case 38: {
            car.moveUp();
            break
        }case 39: {
            car.moveRight();
            break
        }case 40: {
            car.moveDown();
            break
        }
    }update()
}
function update(){
ctx.clearRect(0,0, 1000, 800)
car.drawCar(ctx);
obstacle.drawObstacle(ctx);
}