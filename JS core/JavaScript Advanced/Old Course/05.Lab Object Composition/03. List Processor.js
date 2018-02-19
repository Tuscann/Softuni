function processCommands(commands) {
    let commandProcessors = (function() {
        let list = [];
        return {
            add: (newItem) => list.push(newItem),
            remove: (item) =>
                list = list.filter(x => x != item),
            print: () => console.log(list)
        }
    })();
    let commandProcessor = (function(){commandProcessors})();
    for (let cmd of commands) {
        let [cmdName, arg] = cmd.split(' ');
        commandProcessors[cmdName](arg);
    }
}
processCommands(['add hello', 'add again', 'remove hello', 'add again', 'print']);


