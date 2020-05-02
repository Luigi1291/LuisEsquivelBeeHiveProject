function beesManager(appManager) {
    this.appManager = appManager;
    this.appContainer = document.getElementById('beeComponent');
    this.bees = [];
    this.loggedBee = new Bee(0, 'Luis Esquivel', 'luis-1291@hotmail.com', '83028700', 'Luigimon', 'San Jose'); 
}

beesManager.prototype.loadBees = function (bees) {
    beesComponent(this.appContainer, bees, this.onClickPosts.bind(this), this.onClickAlbums.bind(this), this.onClickToDos.bind(this));
}

beesManager.prototype.downloadBees = function() {
    var url = 'https://beehive-270a2.firebaseio.com/data/users.json';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.onreadystatechange = this.processRequest.bind(this);
}

beesManager.prototype.processRequest = function (e) {
    var request = e.target;
    if (request.readyState === 4) {
        //console.log(request);
        switch (request.status) {
            case 200:
                console.log('BeeUsers Downloaded Successfully');
                this.processResponse(request.responseText);
                break;
            case 404:
                console.log('Connection Error');
                break;
        }
    }
};

beesManager.prototype.processResponse = function (text) {
    var data = JSON.parse(text);
    //console.log(data);
    this.bees = [];
    
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            var bee = data[key];
            //console.log(bee);
            this.bees.push(new Bee(bee.id, bee.name, bee.email, bee.phone, bee.username, bee.address.city));
        }
    }
    this.loadBees(this.bees);
};

beesManager.prototype.onClickPosts = function (bee) {
    hideBees();
    var postsPage = document.getElementById('postsComponent');
    postsPage.style.display = "block";

    this.appManager.postsManager.loadUserPosts(bee.id);
}

beesManager.prototype.onClickAlbums = function (bee) {
    hideBees();
    var albumsPage = document.getElementById('albumsComponent');
    albumsPage.style.display = "block";
    
    this.appManager.albumsManager.loadAlbumsUser(bee);
}

beesManager.prototype.onClickToDos = function (bee) {
    hideBees();
    var albumsPage = document.getElementById('toDosComponent');
    albumsPage.style.display = "block";
    
    this.appManager.todosManager.loadToDos(bee.id);
}

beesManager.prototype.getLoggedBee = function () {
    return this.loggedBee;
}
