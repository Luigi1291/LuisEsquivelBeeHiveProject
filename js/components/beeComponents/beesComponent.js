function beesComponent(container, bees, onClickPosts){
    this.container =  container;
    
    bees.forEach(bee => {
        var newUIBee = new beeComponent(bee, onClickPosts);
    
        this.container.appendChild(newUIBee);    
    });
}