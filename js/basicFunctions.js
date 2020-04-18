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
    
    var backBtn = document.getElementById('btnBackContainer');
    backBtn.style.display = "none";

    var postsPage = document.getElementById('postsComponent');
    postsPage.style.display = "none";
    
    var albumPage = document.getElementById('albumComponent');
    albumPage.style.display = "none";
    
    var todosComponent = document.getElementById('todosComponent');
    todosComponent.style.display = "none";
}

function hideBees(){
    var beesPage = document.getElementById('beesComponent');
    beesPage.style.display = "none";
    
    var backBtn = document.getElementById('btnBackContainer');
    backBtn.style.display = "block";
}