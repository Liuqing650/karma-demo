// 加法函数
export function add(x){
    return function(y){
        return x + y;
    }
}
// 乘法函数
export function multi(x){
    return function(y){
        return x * y + 1;
    }
}
