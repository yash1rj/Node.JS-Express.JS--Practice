exports.sum = (n1, n2) => {
    return n1+n2;
}

exports.checkPrime = (n) => {
    let cntr = 0;
    for(let i=0; i<=n; i++) {
        if(n%i == 0) {
            cntr++;
        }
    }
    if(cntr==2) {
        return true;
    }
    else {
        return false;
    }
}