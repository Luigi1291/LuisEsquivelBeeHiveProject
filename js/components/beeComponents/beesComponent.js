function beesComponent(container, bees){
    this.container =  container;
    
    bees.forEach(bee => {
        var newUIBee = beeComponent(bee);
    
        this.container.appendChild(newUIBee);    
    });
}