function pri(num) {
    if (num < 2) {
        console.log('Not prime');

    }
    else{
        for (var i = 2; i < num; i++) {
            if (num % i == 0)
                return console.log('Not prime');

        }
        return console.log('Prime');
    }
}
pri(['10']);