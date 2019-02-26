---
author: Tim
categories:
- Life
date: '2013-01-27'
permalink: /migrate-from-dv-to-ve-server/
title: Migrate from (dv) to (ve) Server
slug: notes/migrate-from-dv-to-ve-server
---

Both my [company][1] an I have been using Media Temple for years now. We started on their Grid Server (shared hosting) but quickly realized we needed a much better server. That's when we moved to their Dedicated Virtual (dv) server. We've been running that for the past 3 years and have had no problems at all. In fact it's been the best hosting we've ever had.

Even though business is going well, we started looking at ways to save a little $$ here and there. We decided to re-evaluate our hosting platform and see how we could save money. After much consideration we decided to stick with MT since they've always been so good to us, but decided to switch to their (ve) server. The specs are almost the same and it's almost half the price.

The difference? Basically with the (dv) you are not only paying for hosting but also for a Plesk license. It gives you a nice GUI for interacting with the server. Since we already work a ton with command line on our other severs we decided we didn't need this luxury.

Ok, enough with the back story. Here's the HOW you've been waiting for. Keep in mind that this info is based around migrating from a (dv) to a (ve) server BUT it will help anyone looking to get started with MT's (ve) server.

Also, the info below is only for migrating a site to the (ve) and not how to &#8220;set it up&#8221;. If you are looking for that, I recommend <a href="http://donaldjenkins.com/2011/12/switching-from-a-dv-to-a-ve-server-on-media-temple/" target="_blank">this</a> article.

&nbsp;

1. First things first, SSH into your server. (you can use any user that you've set up or you can even use 'root')

2. Create the new site in your virtual host (replace with your domain and IP address)

[bash] sudo vi /etc/apache2/sites-available/DOMAIN.COM [/bash]

Then add the following to the file

[plain]  
<VirtualHost YOUR-IP:80>  
ServerAdmin webmaster@DOMAIN.COM  
ServerName DOMAIN.COM  
ServerAlias www.DOMAIN.COM  
DocumentRoot /var/www/DOMAIN.COM/html/  
ErrorLog /var/www/DOMAIN.COM/logs/error.log  
CustomLog /var/www/DOMAIN.COM/logs/access.log combined  
</VirtualHost>  
[/plain]

You'll also need to know how to use Vi, and can find out more <a href="http://www.cs.colostate.edu/helpdocs/vi.html" target="_blank">HERE</a>, but for know just know that **:q** will QUIT the file and **:wq** will WRITE it before you QUIT.

3. Now we need to create the directories we specified above &#8220;html&#8221; and &#8220;logs&#8221;

[bash]  
sudo mkdir -p /var/www/DOMAIN.COM/html  
sudo mkdir -p /var/www/DOMAIN.COM/logs  
[/bash]

4. Then just add the site to Apache and reload it.

[bash]  
sudo a2ensite DOMAIN.COM  
sudo /etc/init.d/apache2 reload  
[/bash]

5. Make the folder writeable use either 755 or 777 (just be cautious of security)

[bash] sudo chmod 777 /var/www/DOMAIN.COM/html [/bash]

6. Copy over your files from your (dv) to your (ve) and verify it's all there &#8211; <a href="http://ip-address/domain.com/html/" target="_blank">http://ip-address/domain.com/html/</a>

7. Now comes the database part. If your site is database-less then you can move on to the last step otherwise see below.

First log in to MySQL via command line (I prefer to log in with root)

[bash] mysql -u root -p [/bash]

Second, create the database and set up a user and password

[bash] create database DATABASE-NAME; grant all on DATABASE-NAME.* to 'USERNAME' identified by 'PASSWORD'; [/bash]

Third, exit MySQL and import your .SQL file into the database. I personally found the easiest way to do this is to first upload your .SQL file to the root of your /html/ folder then run the following.

[bash] mysql -u root -p DATABASE-NAME < /var/www/DOMAIN.COM/html/FILENAME.SQL [/bash]

8. Lastly, log into your OLD (dv) and remove the DNS Zone and then log into your new (ve) and add the new DNS Zone&#8230;. or you could just use MT's built in [Point to Another Server Tool][2].

That should be it&#8230; let me know if you have any issues or run into any problems.

 [1]: http://argyllstudios.com
 [2]: http://kb.mediatemple.net/questions/1882/Using+the+Point+to+Another+Server+tool
 