function processCommands(commands) {
    let command = (function () {
        let text = '';
        return {
            append: (t)=>text = text + t,
            removeStart: (count)=>text = text.slice(count),
            removeEnd: (count)=>text = text.slice(0, text.length - count),
            print: function () {
                console.log(text);
            }
        };
    })();
    for (let cmd of commands) {
        let [cmdName, arg] = cmd.split(' ');
        command[cmdName](arg);
    }

}


processCommands(['append hello','append again','removeStart 3','removeEnd 4','print']
);
processCommands(['append 123', 'append 45', 'removeStart 2', 'removeEnd 1', 'print']);