class MailBox {
    constructor(){
        this.meseagebox=[];
    }
     addMessage(subject, text){
        let msg={subject:subject,text:text};
        this.meseagebox.push(msg);
         //console.log(msg);
         return this;
     }
    deleteAllMessages(){
        this.meseagebox=[];
    }
    findBySubject(substr){
        let result=[];
        for (let meseage of this.meseagebox){
            if (meseage[subject].indexOf(substr)!=-1){
                result.push(meseage)
            }
        }
        return result;
    }
    toString(){
        if(this.meseagebox.length==0){
            return '* (empty mailbox)'
        }
        else{
            let result='';
            for (let meseage of this.meseagebox){
                result+=` * [${meseage.subject}] ${meseage.text}+\n`
            }
            result=result.slice(0,result.length-1);
            return result;
        }
    }
}
let mb=new MailBox();
mb.addMessage('subhectt1','texttttt1');
console.log(mb.meseagebox);
