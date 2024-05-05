// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var bar = myNodelist[i].id;
  if (localStorage.getItem(bar) === '1')
    myNodelist[i].classList.toggle('checked');
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    localStorage.setItem(ev.target.id, ev.target.classList.contains('checked') ? '1' : '0')
  }
}, false);
