while (true) {
    console.log("sound level:" + input.soundLevel())
    if (input.soundLevel() > 75) {
        music.playMelody("G A B G A B C B C D D C B A G D", 120)
    } else {
        light.clear()
    }
    
}
