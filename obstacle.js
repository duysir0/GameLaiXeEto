class Obstacle {
    x;
    y;
    width;
    height;
    speed;

    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }
    moveDown(){
        this.y += this.speed
    }
    drawObstacle(ctx){
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fill();
    }
    AutoMove() {
        if (this.y<=canvas.offsetHeight) {
            moveDown()
        }
    }
}