function spiralMatrix(input) {
    let str = input[0].split(' ');
    let row = Number(str[0]);
    let coll = Number(str[1]);
    let matrix = [];
    let count = 0;
    let matrixTopRow = 0;
    let matrixLeftColl = 0;
    let matrixRightColl = coll - 1;
    let matrixBottomRow = row - 1;
    for (let i = 0; i < row; i++) {
        matrix[i] = new Array(coll - 1)
    }
    while (count < row * coll) {
        for (let leftRow = matrixLeftColl; leftRow <= matrixRightColl;leftRow++) {
            count++;
            matrix[matrixTopRow][leftRow] = count;
        }
        matrixTopRow++;
        for (let topColl = matrixTopRow; topColl <= matrixBottomRow; topColl++) {
            count++;
            matrix[topColl][matrixRightColl] = count;

        }
        matrixRightColl--;
        for (let bottomrow = matrixRightColl; bottomrow >= matrixLeftColl; bottomrow--) {
            count++;
            matrix[matrixBottomRow][bottomrow] = count;

        }
        matrixBottomRow--;
        for (let uppColl = matrixBottomRow; uppColl >= matrixTopRow; uppColl--) {
            count++;
            matrix[uppColl][matrixLeftColl] = count;
        }
        matrixLeftColl++;
    }
    console.log(matrix)
}
spiralMatrix(['1 1']);