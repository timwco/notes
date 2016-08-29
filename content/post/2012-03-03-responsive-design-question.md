---
author: Tim
categories:
- Life
date: '2012-03-03'
permalink: /responsive-design-question/
title: Responsive Design Question
url: /responsive-design-question/
---

First off&#8230;. if you are unfamiliar with the term &#8220;responsive web design&#8221; (RWD) check out [A List Apart][1]'s article on [responsive web design][2].

Now that that's out of the way. I'd like to take a look at a recent issue brought up by a client I was working with. In building out their website with [fluid grids][3] and RWD, we came across a small issue. That issue was that when a visitor of the website was using a tablet, phone or any smaller-dimension browsing device, there was no way for them to get back to a full site view.

[<img class="aligncenter size-full wp-image-342" title="largeGrid" src="http://timw.co/wp-content/uploads/2012/03/largeGrid.png" alt="" width="615" height="242" />][4]

This may sound a little strange, but it got me thinking. Remember when mobile versions of a website because really popular? Remember when [jQuery mobile][5] came out? Both of these solutions came about because we wanted an easy way to present our websites to clients on smaller devices, especially phones. While iPhones and Android browsers are great, sometimes you want a smaller version of the website to quickly navigate around and get the information you came seeking. Unfortunately not everyone has the money or really even needs a full blown native mobile app, but pretty much everyone these days should consider some sort of mobile solution. This is what spawned the mobile version of websites and ultimately the need for responsive design. Shortly after the creation of mobile version websites, developers needed a way to give the visitor the ability to go back to the &#8220;desktop version&#8221; of a site while on their phones. This is because generally speaking, a mobile version of a website is quite a bit different than the desktop version. Usually there are less images and less interactive features. Mobile websites generally focus more on content than anything else. The idea is to give the reader a quick overview or snapshot of what your company does.

So, back to my original problem. When creating a website using RWD, does one need to include a way to go back to a desktop version? You see, a mobile version a lot of times sits on a subdomain like *mobile.domain.com* or *m.domain.com*. With RWD, there is no &#8220;other version&#8221; of the website but rather you use [CSS3 media queries][6] to determine how the content is portrayed to the visitor depending on the dimensions of their browsing window. Since it's not a separate version of the site, how and more importantly should you include a way to go back to a full desktop version.

[<img class="aligncenter size-full wp-image-341" title="smallGrid" src="http://timw.co/wp-content/uploads/2012/03/smallGrid.png" alt="" width="615" height="158" />][7]

When I first started using RWD over a year ago, I didn't ever consider this. I figured since we would still be showing the exact same site with just little bit less flair, the visitor didn't need a way to &#8220;go back&#8221;. Recently though, as many companies are embracing this technology, I find myself more and more frustrated that I can't view certain sites on my iPhone the way they were originally meant to be viewed. There is not way to go back. After having a brief discussion with this client I'm currently working with, they decided they did want a way to do this.

To not drag this on any further, I've decided that it's much better to just give the visitors the choice. How can this be handled? Well there are many ways to tackle this from a programming standpoint. The BEST way, in my opinion, is to take care of it using your server-side language and setting either a temporary cookie or using a session to create an ID on the body tag that will override all of the media queries and thus presenting the site in its original format. It's not a small task, but once you build it into the framework of your choice, it will be done.

I have yet to do this on my website, which currently utilizes RWD, but when I get time I'll post up the code example of how I did it in case you are wondering. In the meantime, feel post a comment below or share your thoughts.

&nbsp;

 [1]: http://www.alistapart.com
 [2]: http://www.alistapart.com/articles/responsive-web-design/
 [3]: http://foundation.zurb.com/
 [4]: http://timw.co/wp-content/uploads/2012/03/largeGrid.png
 [5]: http://jquerymobile.com/
 [6]: http://reference.sitepoint.com/css/mediaqueries
 [7]: http://timw.co/wp-content/uploads/2012/03/smallGrid.png
 