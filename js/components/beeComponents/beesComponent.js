function beesComponent(container, bees, onClickPosts, onClickAlbums){
    this.container =  container;
    
    bees.forEach(bee => {
        var newUIBee = new beeComponent(bee, onClickPosts, onClickAlbums);
    
        this.container.appendChild(newUIBee);    
    });
}