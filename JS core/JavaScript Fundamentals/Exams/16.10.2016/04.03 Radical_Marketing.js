function main(arr) {
    let storage = new Map();
    let help = new Map();
    for (let row of arr) {
        let isSubscribes = /.+-.+/.test(row);
        if (!isSubscribes) {
            if (!storage.has(row.trim())) {
                storage.set(row, new Set());
                help.set(row, 0);
            }
        } else {
            let [first, second] = row.split('-');
            first = first.trim();
            second = second.trim();
            if (!storage.has(first)) {
                continue;
            }
            if (!storage.has(second)) {
                continue;
            }
            if (second == first) {
                continue;
            }
            if (storage.get(second).has(first)) {
                continue
            }
            help.set(first, help.get(first) + 1);
            storage.get(second).add(first);
        }
    }
    let sortedStorage = [...storage.entries()].sort((a, b)=> {
        let subs = b[1].size - a[1].size;
        if (subs == 0) {
            return help.get(b[0]) - help.get(a[0]);
        }
        return subs;
    })[0];
    
    let count = 1;
    console.log(sortedStorage[0]);
    if (sortedStorage !== undefined) {
        for (let v of sortedStorage[1]) {
            console.log(`${count}. ${v}`);
            count++;
        }
    }
}
main(["J", "G", "P", "R", "C", "J-G", "G-J", "P-R", "R-P", "C-J"]);