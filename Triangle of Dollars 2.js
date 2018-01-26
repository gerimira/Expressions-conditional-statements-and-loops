function triangle(n) {
    for (var i = 1; i <= n; i++) {
        console.log(new Array(i+1).join('$'))

    }
}
triangle(5)