function solve(input) {

    let that = this;

    switch (input){
        case 'upvote': that.upvotes += 1; break;
        case 'downvote': that.downvotes += 1; break;
        case 'score': return score(that);
    }
    function score(that) {
        let modifier = 0;
        if (that.upvotes + that.downvotes > 50){
            modifier = Math.ceil(Math.max(that.upvotes, that.downvotes) * 0.25);
        }
        let up = that.upvotes;
        let down = that.downvotes;
        let score = up - down;
        let totalVotes = up + down;
        let rating = '';

        if (totalVotes >= 10) {
            if (up / totalVotes > 0.66) {
                rating = 'hot';
            } else if (score >= 0 && (up > 100 || down > 100)) {
                rating =  'controversial';
            } else if (score < 0) {
                rating =  'unpopular';
            }
            else{
                rating = 'new';
            }
        }
        else if (totalVotes < 10){
            rating = 'new';
        }
        return [up + modifier, down + modifier, score, rating];
    }
}
let obj = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 50,
    downvotes: 50
};
solve.call(obj, 'upvote');
solve.call(obj, 'downvote');
console.log(solve.call(obj, 'score'));