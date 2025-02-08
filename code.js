function divSum(a, lo, hi) {
    if(lo > hi) {return 0;}
    else if(lo == hi) {return a[lo];}
    
    len = hi - lo;
    var mid1 = Math.floor((len)/3) + lo;
    var mid2 = Math.floor(2*(len)/3) + lo;
    return divSum(a, lo, mid1) + divSum(a, mid1 + 1, mid2) + divSum(a, mid2+1, hi);
}

function divideAndConquerSum(a) {
    return divSum(a, 0, a.length - 1);
}