function compoundInterest(args) {
    let sum=args[0]
    let interestRate=args[1]/100
    let freq=12/args[2]
    let time = args[3]
    let f=sum*Math.pow(1 + interestRate / freq,freq * time)
    return f
}