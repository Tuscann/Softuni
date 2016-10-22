let r = (function () {

    let post

    return function solve(obj,command) {

        if(post == null){

            post = obj
            if(command == 'upvote'){
                post.upvotes++
            } else if(command=='downvote'){
                post.downvotes++
            } else{
                let output = []
                let upvotesforPrint = post.upvotes
                let downvotesForPrint = post.downvotes
                if(post.upvotes + post.downvotes > 50){
                    let greather = Math.max(post.upvotes , post.downvotes)
                    let bonus = greather*25/100
                    upvotesforPrint += Math.ceil(bonus)
                    downvotesForPrint += Math.ceil(bonus)
                }
                let diff = upvotesforPrint - downvotesForPrint
                output.push(upvotesforPrint)
                output.push(downvotesForPrint)
                output.push(diff)
                let positivePostPercent = post.upvotes *100 / (post.upvotes + post.downvotes)
                if(positivePostPercent > 66 && post.upvotes + post.downvotes >= 10){
                    output.push('hot')
                } else if(post.downvotes <= post.upvotes && post.upvotes > 100 && post.downvotes > 100){
                    output.push('controversial')
                } else if (post.downvotes > post.upvotes){
                    output.push('unpopular')
                } else {
                    output.push('new')
                }
                return output
            }
        } else {
            if(command == 'upvote'){
                post.upvotes++
            } else if(command == 'downvote'){
                post.downvotes++
            } else{
                let output = []
                let upvotesforPrint = post.upvotes
                let downvotesForPrint = post.downvotes
                if(post.upvotes + post.downvotes > 50){
                    let greather = Math.max(post.upvotes , post.downvotes)
                    let bonus = greather*25/100
                    upvotesforPrint += Math.ceil(bonus)
                    downvotesForPrint += Math.ceil(bonus)
                }
                let diff = upvotesforPrint - downvotesForPrint
                output.push(upvotesforPrint)
                output.push(downvotesForPrint)
                output.push(diff)
                let positivePostPercent = post.upvotes *100 / (post.upvotes + post.downvotes)
                if(positivePostPercent > 66 && post.upvotes + post.downvotes >= 10){
                    output.push('hot')
                } else if(post.downvotes <= post.upvotes && post.upvotes > 100 && post.downvotes > 100){
                    output.push('controversial')
                } else if (post.downvotes > post.upvotes){
                    output.push('unpopular')
                } else {
                    output.push('new')
                }
                return output
            }
        }
    }
}())

var forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
}

r(forumPost, 'upvote')
console.log(r(forumPost, 'score'))


//
// var forumPost = {
//    id: '2',
//    author: 'gosho',
//    content: 'whats up?',
//    upvotes: 120,
//    downvotes: 30
// };
//
// console.log(r(forumPost,'score'))


//var forumPost = {
//    id: '3',
//    author: 'emil',
//    content: 'wazaaaaa',
//    upvotes: 100,
//    downvotes: 100
//};

//r(forumPost,'upvote')
//r(forumPost,'downvote')
//console.log(r(forumPost,'score'))
//
// let a ={
//     id: '3',
//     author: 'emil',
//     content: 'wazaaaaa',
//     upvotes: 100,
//     downvotes: 100}
//
// r(a,'upvote')
// r(a,'downvote')
// console.log(r(a,'score'))
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// r(a,'downvote')
// console.log(r('score'))