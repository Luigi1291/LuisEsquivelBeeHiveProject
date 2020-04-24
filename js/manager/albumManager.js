function albumsManager(appManager) {
    this.appManager = appManager;
    this.appContainer = document.getElementById('albumComponent');
    this.albums = [];
    this.photos = [];
}

albumsManager.prototype.loadAlbums = function (albums) {
    this.appContainer.innerHTML = '';
    new albumComponent(this.appContainer, albums);
}

albumsManager.prototype.downloadAlbums = function() {
    var url = 'https://beehive-270a2.firebaseio.com/data/albums.json';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.onreadystatechange = this.processAlbumRequest.bind(this);
}

albumsManager.prototype.processAlbumRequest = function (e) {
    var request = e.target;
    if (request.readyState === 4) {
        console.log(request);
        switch (request.status) {
            case 200:
                console.log('Albums Downloaded Successfully');
                this.processAlbumResponse(request.responseText);
                break;
            case 404:
                console.log('Connection Error');
                break;
        }
    }
};

albumsManager.prototype.processAlbumResponse = function (text) {
    var data = JSON.parse(text);
    //console.log(data);
    this.albums = [];
    
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            var album = data[key];
            //console.log(album);
            this.albums.push(new Album(album.id, album.title, album.userId, []));
        }
    }

    this.downloadPhotos();
};

albumsManager.prototype.downloadPhotos = function() {
    var url = 'https://beehive-270a2.firebaseio.com/data/photos.json';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.onreadystatechange = this.processPhotoRequest.bind(this);
}

albumsManager.prototype.processPhotoRequest = function (e) {
    var request = e.target;
    if (request.readyState === 4) {
        console.log(request);
        switch (request.status) {
            case 200:
                console.log('Photos Downloaded Successfully');
                this.processPhotoResponse(request.responseText);
                break;
            case 404:
                console.log('Connection Error');
                break;
        }
    }
};

albumsManager.prototype.processPhotoResponse = function (text) {
    var data = JSON.parse(text);
    //console.log(data);
    this.photos = [];
    
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            var photo = data[key];
            //console.log(photo);
            this.photos.push(new Photo(photo.id, photo.albumId, photo.title, photo.thumbnailUrl));
        }
    }
};

albumsManager.prototype.loadAlbumsUser = function(bee){
    var userAlbums = this.albums.filter(album => album.userId == bee.id);

    //Map Photos with Albums 
    userAlbums.forEach(album => {
        var photoAlbum = this.photos.filter(photo => photo.albumId == album.id);
        album.photos = photoAlbum;
    });

    this.loadAlbums(userAlbums);
}
