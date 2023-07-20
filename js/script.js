function CopyText(that) {
	var inp =document.createElement('input');
	document.body.appendChild(inp)
	inp.value =that.textContent
	inp.select();
	document.execCommand('copy',false);
	inp.remove();
	alert("Copied!!!");
}

function getScrollbarWidth() {

  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;

}

const btn = document.getElementById('download');
var screenWidth = window.innerWidth;
var scrollbar = getScrollbarWidth();
console.log(screenWidth - btn.offsetWidth, screenWidth, btn.offsetWidth);
btn.style.left = parseInt(screenWidth - btn.offsetWidth - scrollbar,10)+'px';


addEventListener("resize", (event) => {
	scrollbar = getScrollbarWidth();
	screenWidth = window.innerWidth;
	console.log(screenWidth - btn.offsetWidth, screenWidth, btn.offsetWidth);
	btn.style.left = parseInt(screenWidth - btn.offsetWidth - scrollbar,10)+'px';
});

