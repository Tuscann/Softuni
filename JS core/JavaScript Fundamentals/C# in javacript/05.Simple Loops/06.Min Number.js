function max(input) {
    var min = Math.min.apply(null, input.splice(1, input.length - 1));
    // min valley  от 0 до отрежи от 1 със(дължина входа -1)
    console.log(min);

}
max(['2', '99', '100']);
max(['4', '-1000', '-2000', '-3000', '-4000']);
max(['2', '-100', '-999']);