function scrollLock() {
    elems = document.getElementsByTagName('body');
    for (var item of elems) {
      item.classList.add('scroll-lock');
    }
  }

function scrollUnlock() {
    elems = document.getElementsByTagName('body');
    for (var item of elems) {
        item.classList.remove('scroll-lock');
    }
}