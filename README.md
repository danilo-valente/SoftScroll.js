[SoftScroll](https://github.com/Panamark/SoftScroll)
===================================================

A JavaScript framework for easy and soft page scrolling

Copyright (C) 2013 [Mark Linus](https://github.com/MarkLinus/)

### Quick Index

 - [About](#about)
 - [Usage & Syntax](#usage--syntax)
   - [The `options` argument](#the-options-argument)
 - [Automatic scrolling](#other-features)
 - [Compatibility](#compatibility)
 - [Authors](#authors)
 - [License](#license)

- - -

About
=====

SoftScroll.js is a crossbrowser JavaScript framework that enables soft scrolling on a web page.

Usage & Syntax
==============

It's very simple to use SoftScroll.js. First, you need to include it in your page:
```html
<script type="text/javascript" src="SoftScroll-1.0.0.min.js"></script>
```

Then, in order to perform a scroll on the page, you can choose one of the following methods:

- `SoftScroll.scroll(x, y); // Scrolls `x` pixels right and `y` pixels down`
- `SoftScroll.scrollTo(x, y); // Scrolls to the position `[x, y]`
- `SoftScroll.scrollToElement(element); // Scrolls to the element's coordinates`

Then you just need to invoke its methods. In most cases you won't need more than ten lines of code, like
the example below:
```javascript
jsRequest.load("myScript.js");
```

Now, let's suppose you want to load an external script like jQuery, or even a script under the `file://`
protocol. No headaches! Just type it's url:
```javascript
jsRequest.load("http://code.jquery.com/jquery-1.10.2.js");
jsRequest.load("file:///C:/myFile.js");
```
Done! jsRequest will do all the hard work for you.
However, you may also want to know whenever the download fails or not. That's why jsRequest allows you to
configure some options. Just keep reading and see below "The `options` argument" section.

> Tip: Since each method of jsRequest returns the `jsRequest` object itself, it's possible to nestle all methods
> in a single statement, like below:
> ```javascript
> jsRequest
> 	.load("myScript.js")
> 	.load("http://code.jquery.com/jquery-1.10.2.js")
> 	.load("file:///C:/myFile.js");
> ```
> The example above is the pretty exact as the following:
> ```javascript
> jsRequest.load("myScript.js");
> jsRequest.load("http://code.jquery.com/jquery-1.10.2.js");
> jsRequest.load("file:///C:/myFile.js");
> ```
>
> You may also make a single call of the `.load` method:
> ```javascript
> jsRequest.load(
> 		"myScript.js",
> 		"http://code.jquery.com/jquery-1.10.2.js",
> 		"file:///C:/myFile.js"
> 	);
> ```

### The `options` argument

As mentioned in "Callbacks" and "Usage & Syntax" sections, the method `.load` allows you to define callbacks
for each requested file. These callbacks can e compared to the DOM events `onload` (success) and `onerror`
(failure). You can do that in a pretty simple syntax, like JSON:
```javascript
{
	success: function (url, xhr, method, event) {
		// What happens if the file is loaded
	},
	failure: function (url, xhr, method, event) {
		// What happens if the loading failed
	}
}
```

And then just pass it as the last argument of the `.load` method.
Do you remember the example of jQuery? Well, let's how it would be with some options:
```javascript
jsRequest.load("http://code.jquery.com/jquery-1.10.2.js", {
	success: function () {
		alert("Hello, John!");
	},
	failure: function () {
		alert("Sorry, I can't live without jQuery :c");
	}
});
```

If you just want provide the `success` callback, you can simply pass a function instead of the `options`
object:
```javascript
jsRequest.load("myFile.js", function () {
	alert("My file is loaded");
});
```

> Tip: All properties of `options` are optional.

- - -

> Tip: Since you can make a single call for more than one file, you may also do the following:
> ```javascript
> jsRequest.load(
> 	"myScript.js",
> 	"http://code.jquery.com/jquery-1.10.2.js",
> 	"file:///C:/myFile.js",
> 	{
> 		success: function (url) {
> 			alert("Yay! " + url + " is loaded");
> 		},
> 		failure: function (url) {
> 			alert("Couldn't load " + url + " =/");
> 		}
> 	}
> );
> ```
> This way, the `options` argument will be given to each request.

Other Features
==============

jsRequest also stores a request history, where all requested files are stored in array, which is ordered by request
date. Each element of this array is an object that stores the file's url and size and the request's starting date,
ending date and status. This object is described below:
```javascript
{
	/* number */ endDate: ...
	/* number */ size: ...,
	/* number */ startDate: ...,
	/* string */ state: ...,
	/* string */ url: ...
}
```
The history is a property of `jsRequest` can be accessed by `jsRequest.history`.

Compatibility
=============

jsRequest was tested and worked on these browsers:

 * Google Chrome 28.0
 * Mozilla Firefox 22.0
 * Opera 15.0
 * Safari 5.1
 * Internet Explorer 5+

It may also work on other browsers or older versions of the mentioned above, thought I haven't tested yet.

Authors
=======
This project was developed and is currently being maintened by [Mark Linus](https://github.com/MarkLinus/)

License
=======

See [LICENSE.md](https://github.com/Panamark/SoftScroll.js/blob/master/LICENSE.md)