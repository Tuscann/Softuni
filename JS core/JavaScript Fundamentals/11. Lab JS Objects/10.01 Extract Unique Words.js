function extractUnique(text) {
    let uniqueWords = new Set();
    for (let sentence of text){
        let words = sentence
            .toLowerCase()
            .match(/\w+/g);

        for (let word of words){
            uniqueWords.add(word)
        }
    }
    console.log([...uniqueWords.values()].join(", "));
}
extractUnique(['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'
]);