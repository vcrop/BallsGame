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

            container.appendChild(box);

        }

    let ball = document.createElement('div');
    ball.className = 'ball red';
    document.getElementById('box-0_0').appendChild(ball);


})

