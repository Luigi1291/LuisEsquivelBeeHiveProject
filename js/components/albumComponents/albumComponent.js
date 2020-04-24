function albumComponent(container, albums){
    this.container =  container;

    albums.forEach(album => {
        var albumContainer = document.createElement('div');
        albumContainer.className = 'albumComponent';

        var title = document.createElement('p');
        title.className = 'albumTitle';
        title.innerText = album.title;
        albumContainer.appendChild(title);
        
        //Adding photos UI
        photoComponent(albumContainer, album);
        
        this.container.appendChild(albumContainer);    
    });
}