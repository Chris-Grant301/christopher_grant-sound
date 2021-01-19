while True:
    print("sound level:" + input.sound_level())
    if input.sound_level() > 150:
        music.wawawawaa.play_until_done()
    else:
        light.clear()