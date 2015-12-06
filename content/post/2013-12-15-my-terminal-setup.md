---
author: Tim
categories:
- Life
date: '2013-12-15'
permalink: /my-terminal-setup/
title: My Terminal Setup
url: /post/my-terminal-setup/
---

As I <a href="http://tim.getbarley.com/2791/development-tools-updated" target="_blank">mentioned</a> earlier this year, I switched back to the OS X built in terminal for my everyday coding needs. I like to keep as few programs on my computer as possible and since terminal is baked in, I just stick with it. One thing I missed was some of the customization I got when using programs such as iTerm. To combat that, I began looking around for some ways to trick out my terminal, both in appearance but also (and more importantly) in functionality. 

First step, download and install <a href="http://totalterminal.binaryage.com/" target="_blank">TotalTerminal</a>. While this is technically another program, you only know it by the extra settings window under Terminal > Preferences. This program adds the ability to open the terminal window from the top/bottom of your screen with a simple key command. I'm currently using CMD + Left Arrow.

When it comes down to the meat of my terminal window, I have chosen to use the Zsh shell as opposed to the built in Bash shell. Added to this, I also use <a href="http://planetargon.com/who-we-are/robby-russell" target="_blank">Robby Russell</a>'s <a href="https://github.com/robbyrussell/oh-my-zsh" target="_blank">Oh-My-Zsh</a> framework which is where most customization comes in. I won't go into much setup here as this has already been done <a href="http://www.stevendobbelaere.be/installing-and-configuring-the-oh-my-zsh-shell/" target="_blank">many times</a> before, but it's fairly easy. Just install Zsh, followed by Oh-My-Zsh and start configuring the .zshrc file.

Here is what mine looks like:

<pre># Path to your oh-my-zsh configuration.<br />ZSH=$HOME/.oh-my-zsh<br /><br /># Theme<br />ZSH_THEME="cloud"<br /><br /># Aliases<br />alias zshconfig="subl ~/.zshrc"<br />alias ohmyzsh="subl ~/.oh-my-zsh"<br /><br /># Waiting Dots<br />COMPLETION_WAITING_DOTS="true"<br /><br /># Plugins<br />plugins=(git)<br /><br />source $ZSH/oh-my-zsh.sh</pre>

As you can see, I keep things pretty simple. I use the cloud theme, have a few alias set up and am currently only using the GIT plugin. There are <a href="https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins" target="_blank">MANY other plugins</a> you can use as well.

There you have it, my simple terminal setup. Not too many frills, but between the key command to open terminal, and the GIT plugin to always know what branch I'm on and if there are uncommitted changes it makes for quite a nice daily work environment.
 