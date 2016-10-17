function spiralMatrix([input]) {

    let [r, c] = input.split(' ').map(Number);

    let matrix = [];
    for (let row = 0; row < r; row++) {
        matrix.push([]);
        for (let col = 0; col < c; col++) {
            matrix[row][col] = -1;
        }
    }

    // move = 0 - move right, move = 1 - move down,
    // move = 2 - move left, move = 3 - move up
    let value = 1;
    let top = 0;
    let bottom = r - 1;
    let left = 0;
    let right = c - 1;
    let move = 0;

    while (value <= r*c)
    {
        if (move == 0)
        {
            for (let i = top; i <= bottom; i++)
            {
                matrix[left][i] = value++;
            }
            left++; move++;
        }
        else if (move == 1)
        {
            for (let i = left; i <= right; i++)
            {
                matrix[i][bottom] = value++;
            }
            bottom--; move++;
        }
        else if (move == 2)
        {
            for (let i = bottom; i >= top; i--)
            {
                matrix[right][i] = value++;
            }
            right--; move++;
        }
        else if (move == 3)
        {
            for (let i = right; i >= left; i--)
            {
                matrix[i][top] = value++;
            }
            top++; move++;
        }
        move %= 4;
    }

    matrix.map(row => row.join(' ')).join('\n');

    console.log(matrix);
}

spiralMatrix(['5 5']);