function gradsToDegrees(grad) {
    grad=grad%400;
    let degree=grad*0.9;
    return degree <0 ? 360+degree : degree;
}
console.log(gradsToDegrees(-2));