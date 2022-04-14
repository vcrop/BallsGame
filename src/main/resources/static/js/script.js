document.addEventListener("DOMContentLoaded", () => {

    let container = document.getElementById('container');

    container.style.gridTemplateRows.repeat(9);
    container.style.gridTemplateColumns.repeat(9);

    for (let row = 0; row < 9; row++)
        for (let col = 0; col < 9; col++) {

            let box = document.createElement('div');

            box.className = 'box';
            box.id = 'box-' + col + '_' + row;
            box.row = row;
            box.col = col;
            box.style.gridArea = (row + 1) + '/' + (col + 1) + '/' + (row + 2) + '/' + (col + 2);
            box.onclick = () => click(box);

            container.appendChild(box);

        }

    let balls = [{color: 'yellow', row: 3, col: 3}, {color: 'red', row: 5, col: 8}, {color: 'blue', row: 1, col: 5},
        {color: 'green', row: 5, col: 3}];

    born(balls);


})

function born(balls) {
    balls.forEach(_ball => {

        let ball = document.createElement('div');
        ball.className = 'ball ' + _ball.color;

        ball.style.animation = born_animation;

        document.getElementById('box-' + _ball.row + '_' + _ball.col).appendChild(ball);

    });

}


function click(box) {

    console.log(box.row + '_' + box.col);
}
