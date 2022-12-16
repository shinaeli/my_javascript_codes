function cubed(x) {
    return x**3;
}
cubed(4); //64
cubed(); //NaN

function cubed(x=12) {
    return x**3;
}
cubed(5); //125
cubed(); //1728

function cubed(x) {
    if(x === undefined) {
        x=6;
    }
    return x**3;
}
cubed(); //216
cubed(8); //512


function sum(a, k, m=10) {
    return a+k+m;
}
sum(12, 5); //27

function product(t=4, h, k=16) {
    return t*h*k;
}
product(undefined, 8,); //512
