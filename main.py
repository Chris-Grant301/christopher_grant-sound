while True:
    print("sound level:" + input.sound_level())
    if input.sound_level() > 75:
        music.play_melody("G A B G A B C B C D D C B A G D", 120)
    else:
        light.clear()