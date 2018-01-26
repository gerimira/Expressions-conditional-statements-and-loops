function figureOfSquares(n) {
    let result=''
    if(n==4 || n==3 ) {
        for (var i = 0; i < 3; i++) {
            console.log("+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+")
        }
    }
    else if(n==2){
        console.log("+".repeat(3))
    }
    else if(n%2==1){
        console.log("+" + "-".repeat(n-2)+"+"+"-".repeat(n-2)+"+")
        for (var i = 1; i < n/2-1; i++) {
            console.log("|" + " ".repeat(n-2)+"|"+" ".repeat(n-2)+"|")
        }
        console.log("+" + "-".repeat(n-2)+"+"+"-".repeat(n-2)+"+")
        for (var i = n/2+1; i < n-1; i++) {
            console.log("|" + " ".repeat(n-2)+"|"+" ".repeat(n-2)+"|")
        }
        console.log("+" + "-".repeat(n-2)+"+"+"-".repeat(n-2)+"+")
    }
    else if(n%2==0){
        console.log("+" + "-".repeat(n-2)+"+"+"-".repeat(n-2)+"+")
        for (var i = 1; i < n/2-1; i++) {
            console.log("|" + " ".repeat(n-2)+"|"+" ".repeat(n-2)+"|")
        }
        console.log("+" + "-".repeat(n-2)+"+"+"-".repeat(n-2)+"+")
        for (var i = n/2+1; i < n-1; i++) {
            console.log("|" + " ".repeat(n-2)+"|"+" ".repeat(n-2)+"|")
        }
        console.log("+" + "-".repeat(n-2)+"+"+"-".repeat(n-2)+"+")
    }

}
figureOfSquares(2)