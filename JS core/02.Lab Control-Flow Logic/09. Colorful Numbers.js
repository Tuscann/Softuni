function nums(n) {
    let html = '<ul>\n';
    for (let i = 1; i <= n; i++) {
        let color = 'blue';
        if (i % 2 != 0) color = 'green';
        html += `  <li><span style='color: ${color}'>${i}</span></li>\n`;
    }
    html += '</ul>';
    return html;
}
console.log(nums(10));