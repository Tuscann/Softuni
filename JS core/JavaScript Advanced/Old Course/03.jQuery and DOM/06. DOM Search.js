function domSearch(selector, bool) {

    let fatherDiv = $(selector);
    fatherDiv.attr('class', 'items-control');

    let div1 = $('<div class="add-controls"></div>');
    let label1 = $('<label>Enter text: </label>');
    let input = $('<input>');
    let a1 = $('<a class="button" style="display: inline-block">Add</a>');

    label1.append(input);
    div1.append(label1);
    div1.append(a1);
    fatherDiv.append(div1);

    let div2 = $('<div class="search-controls">');
    let label2 = $('<label>Search:</label>');
    label2.on('input', function () {
        search()
    });

    let input2 = $('<input>');

    label2.append(input2);
    div2.append(label2);
    fatherDiv.append(div2);

    let div3 = $('<div class="result-controls"></div>');
    let ul = $('<ul class="items-list"></ul>');
    div3.append(ul);
    fatherDiv.append(div3);

    a1.on('click', function () {
        let textValue = input.val();
        let li = $('<li class="list-item"></li>');
        let del = $('<a class="button">X</a>');
        del.click({li: li}, deleteItem);

        let strong = $('<strong></strong>');
        strong.text(textValue);

        li.append(del);
        li.append(strong);
        ul.append(li);
        search();
    });

    function deleteItem(event) {
        event.data.li.remove();
        search();
    }

    function search() {
        let searchVal;
        if (bool) {
            searchVal = input2.val()
        } else {
            searchVal = input2.val().toLowerCase()
        }

        let allLi = $('.items-list li').each((index, item)=> {

            if (bool) {
                if (item.textContent.substr(1).indexOf(searchVal) !== -1) {
                    $(item).css('display', '')
                } else {
                    $(item).css('display', 'none')
                }
            } else {
                if (item.textContent.substr(1).toLowerCase().indexOf(searchVal) !== -1) {
                    $(item).css('display', '')
                } else {
                    $(item).css('display', 'none')
                }
            }
        })
    }
}