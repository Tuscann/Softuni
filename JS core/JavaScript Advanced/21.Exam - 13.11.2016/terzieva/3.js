class MailBox{
    constructor(){
        this._messageCount = 0;
        this._msgBox = [];
    }
    get messageCount(){
        return this._messageCount;
    }

    addMessage(subject, text){
        let subj = '' + subject;
        let txt = '' + text;
        let obj = {"subject":subj, "text":txt};
        this._msgBox.push(obj);
        this._messageCount++;
        return this;
    }

    deleteAllMessages(){
        this._msgBox = [];
        this._messageCount = 0;
    }

    findBySubject(substr){
        let result = [];
        for(let msg of this._msgBox){
            if(msg.subject.indexOf(substr) != -1){
                result.push(msg);
            }
        }
        return result;
    }

    toString(){
        if(this._messageCount != 0){
            let resultStr = '';
            for (let msg of this._msgBox){
                resultStr += ` * [${msg.subject}] ${msg.text}\n`
            }
            resultStr = resultStr.slice(0, resultStr.length - 1);
            return resultStr;
        }
        return ' * (empty mailbox)';
    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());