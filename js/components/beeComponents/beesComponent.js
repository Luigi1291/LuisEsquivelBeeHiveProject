function beesComponent(container, bees, onClickPosts, onClickAlbums, onClickToDos){
    this.container =  container;
    
    bees.forEach(bee => {
        var newUIBee = new beeComponent(bee, onClickPosts, onClickAlbums, onClickToDos);
    
        this.container.appendChild(newUIBee);    
    });
}