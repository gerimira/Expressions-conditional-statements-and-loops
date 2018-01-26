function distance3D(args) {
    let dist=Math.sqrt((args[3]-args[0])**2+(args[4]-args[1])**2+ (args[5]-args[2])**2);
    console.log(dist);
}
distance3D([1, 1, 0, 5, 4, 0]);