function lastMonth(args) {
    let d=args[0]
    let m=args[1]
    let y=args[2]
    let newDate=new Date(y,m-1,0)
    let daysCount=newDate.getDate()
    return daysCount
}
let args=[17, 3, 2002]
let output=lastMonth(args)
console.log(output)