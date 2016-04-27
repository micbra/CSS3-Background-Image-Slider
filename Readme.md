CSS3 Background-Image Slider
============

This is a realization of a Background-Image Slider that works only with CSS3 (no Javascript/jQuery needed!)

Here we go with the instructions:

## Basics

Your background images need to follow some specific conventions. Make sure that:
- your files are placed in the `images/` folder
- your file extension is `.jpg` (and **not** `.JPG`)
- your files are named numericaly sequenced, starting from 1 (e.g. *1.jpg, 2.jpg 3.jpg 4.jpg, ...*)

## Configuration
When you open the `css/style.scss` file you have some configuration options in line 1-5:
* `$time_per_image`: time in seconds for each image to display
* `$image_count`: total number of images in your `images` folder
* `$fade_to`: hexadecimal, rgb/rgba or hsl color value to fade to (also color of the circle in the center of your page)
* `$text_color`: hexadecimal, rgb/rgba or hsl color value to set as text color
* `$circle_radius`: radius of circle in pixels

## Compilation
To compile your SCSS file to good 'ol CSS you have multiple options:
- Use a GUI application like [Koala](http://koala-app.com/)
- Use an online tool like [Sassmeister](http://sassmeister.com)
- Use grunt over the command line (node.js required)

### Grunt usage
If you decide to use grunt for the build process I decided to delever you with a prerequisited Gruntfile, so you just have to follow these steps:
1. Install node.js
2. Install grunt and the sass compiler:
	- change into your project directory
	- run `npm install`
3. To compile your sass in a developement environment run `grunt sass:dev` for an minified deployment version run `grunt sass:live`

## Troubleshooting
I can't see any background images
:   make sure you compiled the .scss file and put the result in `css/style.css`.
