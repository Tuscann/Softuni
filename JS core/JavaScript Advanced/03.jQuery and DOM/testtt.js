function domSearch(selector, cs) {
    let wrapper = $(selector);

    function generateHtml(wrapper) {
        let addControls = $(`<div class="add-controls"><label>Enter text: <input></label><a class="button" style="display:inline-block;">Add</div>`);
        let searchControls = $(`<div class="search-controls"><label>Search: <input></label></div>`);
        let resultControls = $(`<div class="result-controls"><ul class="items-list">
<li class="list-item"></li>
</ul></div>`);

        addControls.find('a').click(createListItem);
        searchControls.find('input').on('change',searchListItem);
        wrapper.append(addControls);
        wrapper.append(searchControls);
        wrapper.append(resultControls);
    }


    generateHtml(wrapper);
    function createListItem() {
        let text = $('div.add-controls input').val();
        let ul = $('.items-list');
        let list = $(`<li class="item-list"><a class="button">X</a><strong>${text}</strong></li>`);
        list.appendTo(ul);
        list.find('a').click(deleteListItem);
    }

    function deleteListItem() {
        let li = $(this).parent();
        li.remove();
    }

    function searchListItem() {

        let searchText = $('.search-controls').find('input').val();
        if(cs == false) {
            searchText=searchText.toLowerCase();
        }
        let itemList = $('.items-list li');
        for (let i = 0; i < itemList.length; i++) {
            let item = itemList.eq(i);
            let textContent = item.find('strong').text();
            if(cs == false) {
                textContent = textContent.toLowerCase();
            }
            if(!textContent.includes(searchText)) {
                itemList.eq(i).css('display','none');
            }
            else {
                itemList.eq(i).css('display','');
            }
        }
    }
}