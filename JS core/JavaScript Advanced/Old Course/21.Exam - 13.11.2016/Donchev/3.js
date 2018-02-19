//Mocha
class MailBox {
    constructor() {
        this.mailbox = [];
    }
    get messageCount() {
        return this.mailbox.length;
    }
    addMessage(subject, text) {
        this.mailbox.push({subject, text});

        return this;
    }
    deleteAllMessages() {
        this.mailbox = [];
    }
    findBySubject(substr) {
        if (this.mailbox.length == 0) {
            return [];
        }
        return this.mailbox.filter(m => m.subject.indexOf(substr) >= 0);
    }
    toString() {
        if (this.mailbox.length == 0) {
            return ` * (empty mailbox)`;
        }
        let res = '';
        for (let mail of this.mailbox) {
            res += ' * [' + mail.subject + '] ' + mail.text + '\n';
        }
        return res;
    }
}