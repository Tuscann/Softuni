function attachEvents(){
    $("#submit").on("click",function(){
        let newMessagesJSON=JSON.stringify({
            author: $("#author").val(),
            content:$("#content").val(),
            timestamp: Date.now()
        });
        $.post("https://message-cbf98.firebaseio.com/messenger.json",newMessagesJSON)
        $("#author").val("");
        $("#content").val("")

    })
    $("#refresh").on("click",function(){
        if($('#messages').val().length!=0) {
            $('#messages').html('');
        }
        let request ={
            method:"GET",
            url:"https://message-cbf98.firebaseio.com/messenger.json",
            success:getMessages
        };
        $.ajax(request);
        function getMessages(data){
            console.log(data);
            //let newdata = Object.values(data);
            let arr =[];
            for(let element in data){
                console.log(element);
                arr.push({avtor:data[element].author,text:data[element].content,time:data[element].timestamp})

            }
            arr.sort((a,b)=>a.time-b.time);
            //console.log(arr)
            for(let element of arr){
                $('#messages').append(`${element.avtor}: ${element.text}\n`);
            }
            console.log( $('#messages').text())
        }
    })
}