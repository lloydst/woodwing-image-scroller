# ImageGridScroller
the project can be found at [github pages](https://lloydst.github.io/woodwing-image-scroller/)
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## first time running the project
Run `git clone https://github.com/lloydst/woodwing-image-scroller.git .` to get the source code in the folder your cl is at.
Then run ng serve after that to view the project at `http://localhost:4200`

## Development server
Run `ng serve` for a local version. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## docs
If you have compodoc installed globaly you can simply run: `compodoc -s` considering you have run `npm run compodoc` at least once, compodocs (instal)docs are located [here](https://compodoc.app/guides/installation.html)

## assignment

&#10003; Goal: Implement an image grid that displays 10.000 images with fluid and smooth scrolling

Deadline: 20:00 CEST Monday 24th December. All code and documentation should have been submitted by this time and Github details shared to this email address (including cc's).

Prerequisites: Needs to be built with Angular. Additional frameworks, plugins, etc. are allowed but only if it adds value.

Datasource: Get the data from an external source*. If, for example, the data source returns 20 items you are allowed to copy these items 500 times to obtain the 10.000 items. Feel free to use a different source if that suits you better, but the source needs to provide an image, a title and a description.

Specifications: The images need to be displayed as tiles in a grid. The width and height of the tiles are fixed, e.g. width 180px - height 250px. The number of columns depends on the width of the screen. The tiles need to have some space between them. The tile itself shows the image and the title. When hovering over the tile, it should show a tooltip with the description of the image. The grid should allow to scroll vertically to the bottom of the list in a fluid, smooth way.

Before you begin: Shortly write down how you want to approach this assignment.
- make a api call
- transform the data to comply to the assignment
- display the data in a for loop with css grid implementation
- infinite scroll?

Code: Put the source code in a GitHub repository so you can describe per commit what you did and why.

[github](https://github.com/lloydst/woodwing-image-scroller)

When done or when the time runs out: Write down what you think could be improved.
improvements: 
 - &#10003; search funtionality (instead of static data like the assignment semi-suggested)
 - i agree with the set width of images but the set heigth makes for some squished/ stretced images but didn't change that. to comply to the assignment.
 - like i mentioned in a comment on one of my commits i could have used a for loop too make 10000 items out of the 500 returned by the api call. by that would cause a slight issue in that. If less then 500 are returned as a response there would be less then 10000 items. so using .slice(0, 9999) after the while loop has finished would always return 10k items.
 - like you can see in 'the before you begin' i thought about infinite scroll but decided against it as i had 
 	1. i never used it (kinda why i wanted to use it)
	2. you mentioned smooth vertical scroll and infinite scroll often takes to long to be called 'smooth'  
