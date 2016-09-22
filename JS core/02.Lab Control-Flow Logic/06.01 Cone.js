function cone(input) {

    let radius = Number(input[0]);
    let height = Number(input[1]);

    let volume = 1 / 3 * (Math.PI * radius * radius * height);
    let slantHeight = Math.sqrt(radius * radius + height * height);
    let area = Math.PI * radius * (radius + slantHeight);

    console.log("volume =", volume);
    console.log("area = ", area);
}
cone([3,4])