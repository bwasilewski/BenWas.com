--- 
slug: "/blog/Bash-Has-a-VIM-mode" 
date: "2020-6-22" 
title: "Bash Has a VIM mode!" 
description: "One of the things I love about the terminal is that no matter how
long you've been using it..."
tags:
- VIM
- Bash
- Tips
---

One of the things I love about the terminal is that no matter how long you've
been using it, there seems to always be something new to learn. I've been using
the terminal to help me build my projects for years now, and its taken me up
until now to discover this incredibly useful feature. 

If you are a VIM user, then you are well aware of its myriad of features, most
notably how to move the cursor around. Once you start to get comfortable in VIM,
you find yourself wanting to use VIM's features in other editors and
applications.  

`set -o vi` 

Once you've done this and restarted Bash, things will work as usual until you
hit the escape key. So feel free to type whatever line you'd like to run in
Bash, hit the escape key, and now you're in VIM mode, which works the same way
as Normal mode does in VIM. Use `j`, `k`, `h` and `l` to move the cursor down, up, left
and right respectively. The `w` key will take you forward by word, `b` will take
you back by word, etc. Mess around with it and see what you think. You can
always remove the line you added to your `.bashrc` if you decide you don't like
it. I know I'll be trying all sorts of stuff with it.

## A few more tips

To scroll back through your history, you can use the `j` and `k` keys to go
up/down when your current line is blank. Current line's not blank? Easy. Hit
escape to enter VIM mode, and type `dd`. After that you can scroll through your
history or use the `i` key just like you would in VIM to type a new command you'd like to execute.

As you can imagine there's a ton of other things you can do, all requiring some
basic VIM knowledge. If you need to brush up, try running `vimtutor` in your
command line. That's it for now, thanks for reading!
