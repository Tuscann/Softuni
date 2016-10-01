function az(input) {
    let test_str = String(input[0]);

    let print_String = [];
    while(true){
        let start_position = test_str.indexOf('(');
        let end_position = test_str.indexOf(')', start_position);
        var text_to_get = test_str.substr(start_position + 1, end_position - start_position - 1);
        if(text_to_get.length==0){
            break
        }
        let removed_String = test_str.substr(0, end_position + 1);
        test_str = test_str.replace(removed_String, '');
        print_String.push(text_to_get);
    }
    print_String = print_String.join(', ');
    console.log(print_String);
}
az(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']);

