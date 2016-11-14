function attachEvents() {
    $(`#btnAdd`).on(`click`, function() {
        let newTown = $(`#newItem`).val();
        if (newTown !== ``) {
            $(`#towns`).append($(`<option>`).text(newTown));
            $(`#newItem`).val(``);
        }
    });

    $(`#btnDelete`).on(`click`, function() {
        $(`#towns option:selected`).remove();
    });
}
 
