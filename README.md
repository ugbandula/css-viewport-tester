# Viewport-Percentage (or Viewport-Relative) Lengths

# Definition
The viewport-percentage lengths are relative to the size of the initial containing block. When the height or width of the initial containing block is changed, they are scaled accordingly.

So, by using viewport-percentage lenghts, HTML elements adjust automatically when the height or width of the screen changes.

There are a few options you may find useful:

    vh (viewport height)
    vw (viewport width)
    vmin (viewport minimum length)
    vmax (viewport maximum length)

# Example	

HTML Code Sample
	<div id="welcome">
	   your content on screen 1
	</div>
	 
	<div id="projects">
	   your content on screen 2
	</div>

CSS Sample
	div#welcome {
	height: 100vh;
	background: black;
	}
	 
	div#projects {
	height: 100vh;
	background: yellow;
	}

# Viewport-percentage lenghts browser support
All modern browsers do support this at the moment.
