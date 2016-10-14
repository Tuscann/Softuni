function ajaxRequestValidator(input) {
    let [hashPattern, requests] = [input.pop().split(''), input];

    function isValidAuthToken(token, hash) {
        token = token.split('');
        for (let i = 0; i < hash.length; i += 2) {
            let times = Number(hash[i]);
            let ch = hash[i + 1];
            if (times === token.filter(c => c === ch).length) {
                return true;
            }
        }

        return false;
    }

    for (let i = 0; i < requests.length; i += 3) {
        let method = requests[i];
        let credentials = requests[i + 1];
        let content = requests[i + 2];

        if (/^Method:\s(GET|PUT|POST|DELETE)$/.test(method) &&
            /^Credentials:\s(Basic|Bearer)\s([A-Za-z0-9]+)$/.test(credentials) &&
            /^Content:\s([0-9a-zA-Z\.]+)$/.test(content)) {
            let methodType = method.match(/^Method:\s(GET|PUT|POST|DELETE)$/)[1];
            let [credentialsType,credentialsAuthToken]  = credentials
                .match(/^Credentials:\s(Basic|Bearer)\s([A-Za-z0-9]+)$/).filter((e, i) => i > 0);

            if (methodType !== 'GET' && credentialsType === 'Basic') {
                console.log(`Response-Method:${methodType}&Code:401`);
                continue;
            }

            if (!isValidAuthToken(credentialsAuthToken, hashPattern)) {
                console.log(`Response-Method:${methodType}&Code:403`);
                continue;
            }

            console.log(`Response-Method:${methodType}&Code:200&Header:${credentialsAuthToken}`);
        } else {
            console.log('Response-Code:400');
        }
    }
}

// ajaxRequestValidator(["Method: PUT","Credentials: Bearer as9133jsdbhjslkfqwkqiuwjoxXJIdahefJAB","Content: users.asd/1782452$278///**asd123","Method: POST","Credentials: Bearer 028591u3jtndkgwndskfjwelfqkjwporjqebhas","Content: Johnathan","Method: DELETE","Credentials: Bearer 05366u3jtndkgwndssfsfgeryerrrrrryjihvx","Content: This.is.a.sample.content","2e5g"]);
ajaxRequestValidator(["Method: GET", "Credentials: Bearer asd918721jsdbhjslkfqwkqiuwjoxXJIdahefJAB", "Content: users.asd.1782452.278asd", "Method: POST", "Credentials: Basic 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas", "Content: Johnathan", "2q"]);