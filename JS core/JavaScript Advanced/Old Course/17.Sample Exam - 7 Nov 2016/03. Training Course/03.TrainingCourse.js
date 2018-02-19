//Mocha Tests
class TrainingCourse {
    constructor(title, trainer) {
        this.title = title;
        this.trainer = trainer;

        this.topics = [];
    }

    addTopic(title, date) {
        let newTopic = {
            title: title,
            date: date
        };

        this.topics.push(newTopic);
        this._sortTopics();

        return this;
    }

    get firstTopic() {
        return this.topics[0];
    }

    get lastTopic() {
        return this.topics[this.topics.length - 1];
    }

    toString() {
        let output = 'Course "' + this.title + '" by ' + this.trainer + '\n';
        return output + this.topics.map(t => ` * ${t.title} - ${t.date}`).join('\n');
    }

    _sortTopics() {
        this.topics
            .sort((t1, t2) => t1.date - t2.date);
    }
}