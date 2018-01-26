function distanceOverTime(array) {

    let s1=(array[0]*1000)*(array[2]/3600);
    let s2=(array[1]*1000)*(array[2]/3600);
    let dist=Math.abs(s1-s2);
    console.log(dist);

}
distanceOverTime([11, 10, 120]);