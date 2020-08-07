# The Basic Gist
This site is built using [jekyll](https://jekyllrb.com/), a static site generator. Basically it lets you create a static site really easily, without having a bunch of repeated code (ex: for the page headers and footers, or repeating elements like council member photos) by splitting them up into their own components and calling them in the individual pages.

Jekyll also lets you pull data from `.yml` files and generate content for the site from it. This is what all our files in the _data/ folder are for.

## I just want to edit the pages that aren't in the `/data` folder
To edit the pages that aren't in the _data/ folder, find the appropriate `.html` file in this repo and update it's contents. They are well organized and all appropriately named so they should be easy to find. A good rule of thumb is to follow the url of the page. Example, if you're trying to update the About -> A Brief History page, it's url is `uclit.ca/about/history`, so it's html file is found is named `history.html` under the `about/` folder.

## I want to edit the look and feel of the website
To edit the website, first get an understanding of the jekyll framework by going through [this tutorial](https://jekyllrb.com/docs/).

Next, you can pull this repo, make your edits and test them locally by running `bundle exec jekyll serve --livereload`.
