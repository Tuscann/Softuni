function findSubsequence(input) {
    var allSubsequence = [],

        longestSubsequence = null,
        longestSubsequenceLength = -1;

    for (let i = 0; i < Number(input.length); i++) {          //i=1
       var subsequenceForCurrent = [Number(input[i])],
            current = Number(input[i]),
            lastElementAdded = -1;
        for (let j = i; j < input.length; j++) {
            let subsequent = Number(input[j]);
            if ((subsequent > current) && (lastElementAdded < subsequent)) {
                subsequenceForCurrent.push(subsequent);
                lastElementAdded = subsequent;
            }
        }
        allSubsequence.push(subsequenceForCurrent);

    }

    for (var i in allSubsequence) {
        var subs = allSubsequence[i];
        console.log(subs);
        if (subs.length > longestSubsequenceLength) {
            longestSubsequenceLength = subs.length;
            longestSubsequence = subs;
        }
    }
    return longestSubsequence.join('\n');
}
// console.log(findSubsequence([87, 88, 91, 10, 22, 9, 92, 94, 33, 21, 50, 41, 60, 80]));
//console.log(findSubsequence(['1','3','8','4','10','12','3','3','24']));
console.log(findSubsequence(['20','3','2','15','6','1']));
