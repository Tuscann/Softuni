function a(input) {

    let heroData = [];

    for (let i = 0; i < input.length; i++) {
        let currentHeroArguments = input[i].split(' / ');

        let curentHeroName = currentHeroArguments[0];
        let curentHeroLevel = Number(currentHeroArguments[1]);
        let curentHeroItems = [];

        if (currentHeroArguments.length > 2) {
            curentHeroItems = currentHeroArguments[2].split(', ');
        }
        let hero={
            name:curentHeroName,
            level:curentHeroLevel,
            items:curentHeroItems
        };

        heroData.push(hero);
    }
    console.log(JSON.stringify(heroData));
}
a(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);
