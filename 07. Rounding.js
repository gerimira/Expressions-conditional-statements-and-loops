function rounding(data) {
    let num=data[0]
    let precision=data[1]
    if(precision>15)
        precision=15
    let result=parseFloat(num.toFixed(precision))
    return result
}
console.log(rounding([10.5, 3]))