function dna(input) {
    let rows = Number(input[0]);
    let sequence = 'ATCGTTAGGG';
    let curentindex = 0;

    for (let i = 0; i < rows; i++) {
        let cuurentRow = i % 4;   // текущия ред да се върти само от 0 до 4 защото толково се повтаря спиралата

        if (cuurentRow === 0) { // модулното делене е да не излизаме от  дължината
            console.log('**' + sequence[curentindex++ % sequence.length] + sequence[curentindex++ % sequence.length] + '**');
        }
        else if (cuurentRow === 1 || cuurentRow === 3) {
            console.log('*' + sequence[curentindex++ % sequence.length] + '--' + sequence[curentindex++ % sequence.length] + '*');
        }
        else {
            console.log(sequence[curentindex++ % sequence.length] + '----' + sequence[curentindex++ % sequence.length]);
        }
    }
}
dna(['10']);