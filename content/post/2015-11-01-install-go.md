---
author: Tim
categories:
- Code
date: '2015-11-01'
permalink: /install-go/
title: Installing Go
url: /install-go/
---

Ok, so I&#8217;ve been playing around with [Go][1] for a while now and have been highly impressed. Recently, when my computer crashed and I was forced to get a new one, I was so busy that I only installed what I needed to get back up and running. This weekend, I had some free time and wanted to play with Go a little more, so I though I&#8217;d share my super simple process of getting it set up. Here we [go][2].

<!--more-->

First, like most tools I use on my Mac, I wanted to install Go using [Homebrew][3]. First step.

<pre>
$ brew upgrade && brew update
</pre>
  
  
  <p>
    This will make sure that Homebrew is up to date and all of your packages are as well. The <span class='code-inline'>upgrade</span> command isn&#8217;t neccessary, but I usually do it before I install any new tool. Next up, let&#8217;s install it.
  </p>
  
  
  <pre>
  $ brew install go
  </pre>
  
  
  <p>
    See how easy that was. It will take a minute, but seriously that&#8217;s it for the installation. Now, we just need to do some config. Navigate to your <span class='code-inline'>$HOME</span> directory, for the rest of these commands.
  </p>
  
  
  <pre>
  $ mkdir go
  </pre>
  
  
  <p>
    The above folder is where your programs will be stored and run from. You could also use <span class='code-inline'>golang</span> or anything else. I prefer just <span class='code-inline'>go</span>, but it&#8217;s up to you. Assuming you created a directory called <span class='code-inline'>go</span>, let&#8217;s go ahead and put your Github account in there to make our lives easier later. Just replace <span class='code-inline'>username</span> with your Github username.
  </p>
  
  
  <pre>
  $ mkdir -p ~/go/src/github.com/username
  </pre>
  
  
  <p>
    Now, let&#8217;s tell our computer where these files are, so we have access to the executables. Depeneing on whether you use Bash or ZSH, you will either put the folling in your <span class='code-inline'>.bashrc</span> or your <span class='code-inline'>.zshrc</span>.
  </p>
  
  
  <pre>
  # Configuring Go
  export GOPATH=$HOME/go
  export GOROOT=/usr/local/opt/go/libexec
  export PATH=$PATH:$GOPATH/bin
  export PATH=$PATH:$GOROOT/bin
  </pre>
  
  
  <p>
    Lastly, let&#8217;s test it all out by installing some tools to make our lives easier. First, make sure to restart your Terminal, then run the following.
  </p>
  
  
  <pre>
  $ go get golang.org/x/tools/cmd/godoc
  $ go get golang.org/x/tools/cmd/vet
  </pre>
  
  
  <p>
    That&#8217;s it. Enjoy.
  </p>

 [1]: http://golang.org
 [2]: http://www.urbandictionary.com/define.php?term=pun+intended
 [3]: http://brew.sh
 