function quadraticEquation(a,b,c) {
    let d=(b**2)-4*a*c
    if(d<0){
        console.log("No")
    }
    else if(d==0){
        let x=-b/(2*a)
        console.log(x)
    }
    else
    {
        let x1=(-b + Math.sqrt(d))/(2*a)
        let x2=(-b - Math.sqrt(d))/(2*a)
        console.log(Math.min(x1,x2))
        console.log(Math.max(x1,x2))
    }
}
quadraticEquation(6,11,-35)