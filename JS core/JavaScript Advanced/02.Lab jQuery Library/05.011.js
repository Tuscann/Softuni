function getModel() {
    let model = {
        init: function (num1Sel, num2Sel, resultSel) {
            model.num1 = $(num1Sel);
            model.num2 = $(num2Sel);
            model.result = $(resultSel);
        },
        add: () => model.action((a,b) => a + b),
        subtract: () => model.action((a, b) => a - b),
        action: function (operation) {
            let val1 = Number(model.num1.val());
            let val2 = Number(model.num2.val());
            model.result.val(operation(val1, val2))
        }
    };
    return model;
}