# puppeteer_recon
A simple screenshot tool that you can feed a list of urls to as well as screenshot sizes.

# How to use

1. Clone the repo
2. `npm install`
3. The syntax for the command is as follows:
```
$ node screenshot.js <path_to_file_of_urls_separated_by_newline> <path_to_directory_to_save_images_to> <width> <height>

-- so actual usage would look like this --

$ node index.js interesting_urls.txt "./images" 1280 2000
```
You can leave off the width and height and it will default to 800.

# Build on this
You can do so much with puppeteer. This doesn't even scrape the surface. You can crawl SPAs with ease and with different user agents. I'll be doing more with this but wanted to put it out there for anyone who needed a quick screenshotter.

# Bonus Content
In the file called "pull_urls_from_sitemap.sh", I have included some information on how to pull urls out of a sitemap using xmllint. There is an explanation in the file as to how to use it and why you may need to do some interesting things with namespacing :) 





