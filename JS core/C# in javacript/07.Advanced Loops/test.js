function c (input) {
    var a = [
        "Hydrogen",
        "Helium",
        "Lithiumqwqw",

    ];

    var a2 = a.map(function(s){ return s.length });

    var a3 = a.map( s => s.length );
    console.log(a2);
    console.log(a3);

}
c(['2']);