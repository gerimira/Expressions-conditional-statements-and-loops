function inchesToFeet(inches) {
    let feet = Math.floor(inches/12)
    let inch=inches%12
    console.log(`${feet}'-${inch}"`)

}
inchesToFeet(11)