function QuadraticEquation(param) {
    let [ a, b, c ] = param.map(Number);
    let d = Math.pow(b,2) - (4*a*c);
    if (d > 0) {
        let x1 = (-b + Math.sqrt(d))/(2*a);
        let x2 = (-b - Math.sqrt(d))/(2*a);
        return [x1,x2].sort((a,b) => a-b).join(`\n`);
    }
    else if (d == 0) {
        return -b/(2*a);
    }
    else {
        return `No`
    }
}
QuadraticEquation(['6', '11', '-35']);
QuadraticEquation(['1', '-12', '36']);
QuadraticEquation(['5', '2', '1']);