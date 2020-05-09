/*
function displayMenu(){
    var menu = document.getElementById('ham-menu');
    menu.style.display = "flex";
}
function hideMenu(){
    var menu = document.getElementById('ham-menu')
    menu.style.display = "none";
}
*/
function displayBees(){
    var beesPage = document.getElementById('beesComponent');
    beesPage.style.display = "block";
    
    var postsPage = document.getElementById('postsComponent');
    postsPage.style.display = "none";

    var albumPage = document.getElementById('albumsComponent');
    albumPage.style.display = "none";
    
    var todosComponent = document.getElementById('toDosComponent');
    todosComponent.style.display = "none";

    var overlayContainer = document.getElementById('newComponent');
    overlayContainer.innerHTML= "";
    
    var overlayToDoContainer = document.getElementById('newToDo');
    overlayToDoContainer.innerHTML= "";

    var overlayCommentContainer = document.getElementById('newComment');
    overlayCommentContainer.innerHTML= "";
}

function hideBees(){
    var beesPage = document.getElementById('beesComponent');
    beesPage.style.display = "none";
    
    var backBtn = document.getElementById('btnBackContainer');
    backBtn.style.display = "block";
}