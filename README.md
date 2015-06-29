[![Stories in Ready](https://badge.waffle.io/ArmorAndMint/ArmorAndMint.png?label=ready&title=Ready)](https://waffle.io/ArmorAndMint/ArmorAndMint)
# Armor And Mint

> Minimalist Content Management System built on the MEAN Stack
Simply install, run, and start creating content in easy to use markdown language


## Team

  - __Product Owner__: Sean Grogg
  - __Scrum Master__: Michael Symmes
  - __Development Team Members__: Billy Rukh, Michael Symmes, Sean Grogg

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

- clone the directory using:
git clone https://github.org/ArmorAndMint/ArmorAndMint.git
- **place the bio/hero image of your choice into the client/images directory as a file named avatar.js**
- run npm install
- run bower install
- run gulp OR node server/server.js
- Log in for the first time to register as the content owner
- Start creating markdown based content!

## Known Issues
-  uses the [showdown](https://github.com/showdownjs/showdown) style markdown via [angular-markdown-directive](https://github.com/btford/angular-markdown-directive) which does not follow github stle markdown - strikeout for instance uses an s tag.
- This could be changed in a number of ways, it may even be configurable in the existing directive. Another option that solves both of these issues is: [angular-marked](https://github.com/Hypercubed/angular-marked). In any case it would be great to support all modern markdown.
- Currently sharing a link to a single post is rough around the edges. There is no 'easy' sharing method. Right now you have to manually covert the article title into a hyphenated string to construct a link - like: 'server.com/my-article-title-name-goes-here'
This will return a page view of that article. The problem is that the link itself is not currently
displayed in this format, so there isnt anything to cut and paste from. The client will be changed
to display a proper link title. Might also be worth creating a 'share post' button, that generates
a link for you.


## Requirements

- Node 0.12.x
- Express
- Angularjs
- MongoDB

## Development
> gulp
starts a nodemon session on your server as well as a browser-sync session on port 3000
- TODO: browser sync hangs on startup
    - you have to stop the page load, and refresh on first load but after that browser-sync and nodemon work great

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

### Roadmap


## Contributing

Please see [CONTRIBUTING](https://github.com/ArmorAndMint/ArmorAndMint/blob/master/CONTRIBUTING.md)
and [STYLE GUIDE](https://github.com/ArmorAndMint/ArmorAndMint/blob/master/STYLE-GUIDE.md)
before contributing.
