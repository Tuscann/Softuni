function attachEvents() {
    $('#submit').click(send);
    $('#refresh').click(refresh);

    let url = "https://ajaxdemos-bfee6.firebaseio.com/messenger.json";

    function send() {
        let message = {
            author: $('#author').val(),
            content: $('#content').val(),
            timestamp: Date.now()
        };
        $.post(url,JSON.stringify(message)).then(refresh);
    }
    function refresh() {
        $.get(url)
            .then((result)=> {
                $('#messages').val();
                let keys = Object.keys(result).sort((m1, m2)=>result[m1].timestamp - result[m2].timestamp);
                for (let msg in result) {
                    $('#messages').append(`${result[msg].author}: ${result[msg].content}\n`)
                }
            });
    }

}


