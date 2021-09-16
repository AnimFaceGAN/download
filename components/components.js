var currentState;
var lang;

function changeNav(obj) { 
    if(obj.dataset.state == 'inactive') {
        // click unselected nav
        changePage(obj);
    }
    else {
        // click selected nav
    }
}

function changePage(obj) {
    let mainPartId = document.getElementById('main');
    
    // change state 
    if(currentState) {
        currentState.dataset.state = 'inactive';
    }
    obj.dataset.state = 'active'; 

    // memorize current state
    currentState = obj;

    // change page
    if(currentState.id == 'land') 
        mainPartId.innerHTML = '<land-page></land-page>';
    else if(currentState.id == 'about') 
        mainPartId.innerHTML = '<about-page></about-page>';
    else if(currentState.id == 'news') 
        mainPartId.innerHTML = '<news-page></news-page>';
    else if(currentState.id == 'download') 
        mainPartId.innerHTML = '<download-page></download-page>';
}

window.onload = function(){
    lang = 'ja';
    document.getElementById('main').innerHTML = '<land-page></land-page>';
}