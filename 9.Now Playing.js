function nowPlaying(args) {
    let trackName=args[0]
    let artist=args[1]
    let duration=args[2]
    console.log("Now Playing: "+artist+" - "+trackName+" ["+duration+"]")
}
nowPlaying(['Number One', 'Nelly', '4:09'])