function a() {

    var mySet = new Set();

    mySet.add(1);
    mySet.add(5);
    mySet.add(1);
    mySet.add(0);

    mySet.forEach((i)=>console.log(i));

    console.log(typeof mySet);

}
a([])