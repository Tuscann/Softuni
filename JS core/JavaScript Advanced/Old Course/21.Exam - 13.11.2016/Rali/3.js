class MailBox{
    constructor(){
        this._mailBox = [];
    }

    addMessage(subject, text){
        let newMail = {subject, text};
        this._mailBox.push(newMail);
        return this;
    }

    get messageCount(){
        return this._mailBox.length;
    }

    deleteAllMessages(){
        this._mailBox= [];
    }

    findBySubject(substr){
        let foundSubjects = [];

        for (let mail of this._mailBox){
            if (mail.subject.indexOf(substr) >= 0){
                foundSubjects.push(mail);
            }
        }

        return foundSubjects;
    }

    toString(){
        if (this._mailBox.length == 0){
            return ' * (empty mailbox)'
        }

        let strToPtint = '';
        for (let i = 0; i < this._mailBox.length; i++){
            if (i < this._mailBox.length - 1){
                strToPtint += ` * [${this._mailBox[i].subject}] ${this._mailBox[i].text}\n`;
            }
            else{
                strToPtint += ` * [${this._mailBox[i].subject}] ${this._mailBox[i].text}`;
            }
        }
        return strToPtint;
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