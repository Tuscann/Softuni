class MailBox {
    constructor() {
        this.mailBox = [];
    }

    addMessage(subject, text) {
        if (typeof subject === `string` && typeof text === `string`) {
            this.mailBox.push({
                subject: subject,
                text: text
            });
        }

        return this;
    }

    get messageCount() {
        return this.mailBox.length;
    }

    deleteAllMessages() {
        this.mailBox = [];
    }

    findBySubject(subString) {
        let matches = [];
        for (let msg of this.mailBox) {
            if (msg.subject.indexOf(subString) !== -1) {
                matches.push(msg);
            }
        }

        return matches;
    }

    toString() {
        let output = ``;
        if (this.mailBox.length === 0) {
            output = ` * (empty mailbox)`;
            return output;
        } else {
            for (let msg of this.mailBox) {
                if (msg !== this.mailBox[0]) {
                    output += `\n`;
                }
                output += `* [${msg.subject}] ${msg.text}`;
            }
        }

        return output;
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
    new MailBox().addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());

