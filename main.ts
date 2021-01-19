while (true) {
    console.log("sound level:" + input.soundLevel())
    if (input.soundLevel() > 150) {
        music.wawawawaa.playUntilDone()
    } else {
        light.clear()
    }
    
}
