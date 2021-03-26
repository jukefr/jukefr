+++
title = "Ricing Linux in 2021"
date = 2020-12-01T22:25:27+01:00
description = "Want your desktop to look like your favorite movie/series hackerman ? Check this out and let the 1337s flow through you."
toc = true
categories = ["linux"]
tags = ["ricing", "ergonomics"]
images = [
"/post/ricing-linux/images/hero.png"
] # overrides the site-wide open graph image
[[resources]]
src = "images/hero.bpg"
name = "hero"
[[resources]]
src = "images/keyboard.bpg"
name = "keyboard"
[[resources]]
src = "images/keyboard-home.bpg"
name = "keyboard-home"
[[resources]]
src = "images/keyboard-hands.bpg"
name = "keyboard-hands"
+++
<span></span>
<!--more-->

{{< lazy  name="hero" caption="this post will guide you through the basic steps of ricing your distro" alt="an abstract representation of how a tilling window based setup would look like" title="heard you want that unixporn setup" >}}

It all started out as fun and games. Then the poor habits caught up with me. Wrist rsi is no fun, especially when you start showing symptoms in your late teens.
And that your job is to be behind a screen writing code. And your hobby is pretty much the same thing...

However, my existential crisis was short-lived as I soon realized there are many things that I could do to improve the ergonomics of my setup.

## a (not so quick) historical primer

Speaking of ergonomics, I think it is quite important that I preface this article with a "small" section about it. We all know what the word means, from a distance. If you don't know what a home row is or why people use keyboard-only environments then there is little purpose in ricing your setup unless you want it to look "cool and 1337". Admittedly, I too was once a poorly cultivated skiddie, which is why I think it is important to talk about these ergonomics base principles since they are rarely taught nowadays.

### keyboard

Maybe you are a zoomer like me. The first OS you ever laid your hands on was probably a fully fledged graphical interface called Windows (95 in this case).
What's this ? I move this mouse thingy, and I have a cursor that mirrors it on the screen ?
What's that ? I type on this keyboard thingy and letters appear on the screen ?
And that's usually how the trouble starts, you get into things, as an autodidact, fiddle about and eventually you end up getting the results you wanted. However, achieving your objective doesn't necessarily mean you went the "correct" way about doing it, in this case "ergonomically" ideal way or even the most efficient way.

Let me give you a simple example : copy and paste.
Everybody knows how to do it, if you are reading this you probably even know of at least two ways of doing it.
Now if you were to ask your less technologically inclined elder relative how to do it at most they would probably know of one way to do it :

1. You `left click` down at one point of the text
2. You drag your mouse over to where you want the selection to end
3. You release the `left click` mouse button
4. You `right click` over the selected text 
5. you `left click` on the copy button on the dropdown
6. you `right click` on the input you want to paste the selection inside of
7. you `left click` on the paste button on the dropdown

Sure, admittedly we did get the result we wanted, a copy and paste operation, but that's 7 different steps, and as very proficient tech-savvy people we know better :

1. You `left click` down at one point of the text
2. You drag your mouse over to where you want the selection to end
3. You release the `left click` mouse button
4. You press `CTRL+C` on your keyboard.
5. you `left click` on the input you want to paste the selection inside of
6. You press `CTRL+V` on your keyboard

Right about now, you might realize this process only has a single less step than the first one. How come the second option feels "way faster and easier" then ? So much so that when you see people use the first one you go into full body cringe.

{{< lazy  name="keyboard" caption="shown for illustration purposes only. actual product may vary." alt="an abstract representation of a keyboard" title="The answer is the keyboard." >}}


You see mice are a terrific invention, useful for plenty of things, games, graphics software and the such. They allow us to interact with abstract representations of concepts that can then be materialized into useful data. Interact with an equalizer curve in Ableton. Aim your reticule at an enemy head in CS:GO. They do require one important thing however, context. If you turn your screen off, your mouse becomes useless in most scenarios. What I'm getting at here is that when you do the action of "clicking copy from a contextual dropdown menu", before you even begin to do what you want, you need to process the context that is given to you by the screen. The copy option is the 3rd one from the top. I have to move my mouse down and make sure I hover the right button before clicking.

All of this context is not necessary when you use your keyboard. You know that in almost any application, when you press `CTRL+C` it will put the selection in your clipboard. When you press `CTRL+V` you know that it will paste. You have an action with a direct consequence and don't have to process any information that is given to you. That's what makes the second copy and paste method seem so "natural". 

To hammer this in a little more, on Windows if I press `Win+E` I know for a fact that it will open a new explorer window, I don't have to process anything in my head, I cannot miss-click a selection from a dropdown. Just as much as you know that when you press the Q key on your keyboard, well the Q key will be the output you get.

So how can we use this and take our copy and paste operation a step further ? Let's take the example of copying an entire line:

1. Move your cursor to the beginning of the selection with your keyboard (arrow keys or movement keys, more on that later)
2. Press `Shift+End`
3. Press `Ctrl+C`
4. Move your cursor to the desired insertion point (arrow keys or movement keys, more on that later)
5. Press `Ctrl+V`

As you can see we are now only using our keyboard for this operation, in this example we are copying an entire line, but if you wanted to select only a couple of letters you could use `Shift+Arrows` or if you wanted to select word per word you could also do `Shift+Ctrl+Arrows`. All of these keybindings produce specific results that will (mostly) always be the same.

So the first takeaway here is that efficiency and repeatability are major assets of the keyboard. Action 1 on a keyboard will (mostly) always result in the same consequence 1'. The only cognitive load associated with that now is that you have to learn a bunch of keybindings. Once you have them down however, it just gets easier and easier the more you use them and learn them. No matter how good you become with a mouse however, there will always be the cognitive load of having to process contextual information that will always vary, coupled with the inherent "inaccuracy" of a mouse, or should I say of human hands.

Another major bonus of reduced mouse usage is that moving your hands between your mouse and your keyboard, and also simply using your mouse can lead to strain on your wrists (most mice are poorly ergonomically designed and apply strain to the wrist, and if your workspace is limited you might also fall into the habit of using your wrist to move your mouse instead of your shoulder), so by not using your mouse (or as little as possible) and having an appropriate posture on your keyboard you drastically reduce the strain on your wrists and therefore the risks of rsi.

### home row

Speaking of good keyboard posture, here's another one my zoomer friends might not be aware about : Have you ever noticed that two of your keyboard keys have small "bumps" on them ? If you are on a QWERTY keyboard its the `F` and `J` keys.

{{< lazy  name="keyboard-home" caption="the orange fruit is of an orange color" alt="an abstract representation where the home keys are on a keyboard (F and J), on the home row" title="the home keys live on the home row" >}}

These keys are called home keys, they live on the home row. They are a "landmark" for your fingers to assist you in touch typing (typing without looking at your keyboard. The feedback of touching these "landmarks" lets you know where your hands are placed at all times)

Your index of each hand is supposed to be placed on each of these "bumps", or home keys. The rest of your fingers should then naturally fall into their respective positions on the home row.

{{< lazy  name="keyboard-hands" caption="yes I do realize that the hands are upside down, sue me." alt="an abstract representation of how your fingers are supposed to be placed on a keyboard, starting with the little finger of the left hand on the letter A, then S, then D, then index on F, for the right hand the index is on J, then K, then L, little finger on L" title="ideal ergonomic hand placement on a keyboard" >}}

This is the "ideal ergonomic" finger/hand placement, each hand is centered on its half of the keyboard, every key is symmetrically equidistant to your fingers such that there are no keys that should be harder to reach with one hand or the other (not really but let's just pretend the world is perfect for our purposes), all the while requiring the least travel distance possible of your fingers/hands.

I won't go into much more detail about touch typing as this could warrant an entire post in and of itself, there are books out there, courses, apps, games, whatever you can think of to learn touch typing it probably exists by now.

The only real tip I can give about it is to just learn by doing it, as with anything it gets easier the longer you work at it.

If you've ever used `vi`, and wondered why the default movement keys are `hjkl`, well the simple reason is that they are the easiest keys for your right hand to reach, while your left hand can press down modifiers.

**as a quick tldr of this preface** :
- the keyboard allows you to memorize keybindings that produce specific repeatable actions without worrying (too much) about context and accuracy, both of them (learning the keybinds and accurate typing) are a question of practice, unlike a mouse
- there is an ideal way of positioning your hands on a keyboard which leads to the "smoothest" experience possible, reduces strain on the wrists, and much of the conceptual choices of terminal based applications are a result of said "ergonomic" hand placement

Keep all of this in mind when designing your custom rice, it's not simply about looking cool (at least for me), it's about having an efficient, ergonomic and coherent environment. When setting keybindings that you often use, try to privilege keys closest to the home row for instance. Usually it takes a while to narrow down exactly what functions you will be using more than others and fine-tuning everything, but it is important to always keep in mind that we're trying to make our life easier, not prettier (although usually once you're done with the functional part, then comes the "unixporn" part, where you can go crazy with all the shadows, corners, gaps, borders, backgrounds, etc you want).

Now let's get to the more hands on part of this, pun intended 👐

## Desktop Environments vs Window Managers
### what's the difference ?
### i3
### sway

## Launchers, Status Bars and Notifications
### rofi
### polybar
### dunst

## Terminals and Shells
### urxvt
### fish with omf

## Text Editor
### do i actually need to learn vim (or emacs) ?
### webstorm/vscode with keyboard plugin + keybindings
### vim vs emacs

## the "unixporn" factor
### ranger
### ncmpcpp and mopidy
### picom and forks
### i3-gaps and forks
### neofetch
### colors

## closing thoughts

**still writing this article, come back later i guess (pls)**