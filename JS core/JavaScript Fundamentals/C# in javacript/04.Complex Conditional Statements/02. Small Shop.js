function small([product,city,quantity]) {


    let total = 0;
    if (city == 'Varna') {
        if (product == 'coffee') {
            total = quantity * 0.45;
        }
        else if(product=='water'){
            total = quantity * 0.70;
        }
        else if(product=='beer'){
            total = quantity * 1.1;
        }
        else if(product=='sweets'){
            total = quantity * 1.35;
        }
        else if(product=='peanuts'){
            total = quantity * 1.55;
        }
    }
    else if(city=='Sofia'){
        if (product == 'coffee') {
            total = quantity* 0.5;
        }
        else if(product=='water'){
            total = quantity * 0.80;
        }
        else if(product=='beer'){
            total =quantity * 1.2;
        }
        else if(product=='sweets'){
            total = quantity* 1.45;
        }
        else if(product=='peanuts'){
            total = quantity * 1.60;
        }

    }
    else if(city=='Plovdiv'){
        if (product == 'coffee') {
            total = quantity * 0.4;
        }
        else if(product=='water'){
            total = quantity * 0.70;
        }
        else if(product=='beer'){
            total = quantity * 1.15;
        }
        else if(product=='sweets'){
            total = quantity * 1.3;
        }
        else if(product=='peanuts'){
            total = quantity * 1.5;
        }
    }
    console.log(total);
}
small(['coffee','Varna','2']);