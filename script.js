// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var bar = 'bar' + i;
  console.log('bar: ' + bar);
  if (localStorage.getItem('bar' + i) === '1')
    myNodelist[i].classList.toggle('checked');
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    console.log('bar: ' + ev.target.id);
    localStorage.setItem(ev.target.id, ev.target.classList.contains('checked') ? '1' : '0')
  }
}, false);
