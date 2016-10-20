function solution(input) {
    let people = [];
    for (let i = 0; i < input.length; i++) {
        let parts = input[i].split('-');
        if (parts.length == 1) {
            let obj = {Name: parts[0], Subscribers: [], SubsribedTo: 0};
            people.push(obj);
        }
        else {
            let firstPerson = people.filter(x=> x.Name == parts[0])[0];
            let secondPerson = people.filter(x=> x.Name == parts[1])[0];

            if (firstPerson === undefined || secondPerson === undefined) {
                continue;
            }
            secondPerson.Subscribers.push(firstPerson);
            firstPerson.SubsribedTo++;
        }
    }
    let personWithMostSubscribers = people[0];
    for (let i = 1; i < people.length; i++) {
        if (people[i].Subscribers.length > personWithMostSubscribers.Subscribers.length) {
            personWithMostSubscribers = people[i];
        }
        else if (people[i].Subscribers.length === personWithMostSubscribers.Subscribers.length) {
            if (people[i].SubsribedTo > personWithMostSubscribers.SubsribedTo) {
                personWithMostSubscribers = people[i];
            }
        }
    }
    console.log(personWithMostSubscribers.Name);
    for (let i = 0; i < personWithMostSubscribers.Subscribers.length; i++) {
        console.log(i + 1 + '. ' + personWithMostSubscribers.Subscribers[i].Name);
    }
}
solution(['A', 'B', 'C', 'D', 'A-B', 'B-A', 'C-A', 'D-A']);
solution(['J', 'G', 'P', 'R', 'C', 'J-G', 'G-J', 'P-R', 'R-P', 'C-J']);