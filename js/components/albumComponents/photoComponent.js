function photoComponent(albumContainer, album){
    
    album.photos.forEach(photo => {
        var photoContainer = document.createElement('div');
        photoContainer.className = 'photoComponent';
    
        var title = document.createElement('p');
        title.className = 'photoTitle';
        title.innerText = photo.title;
        photoContainer.appendChild(title);
        
        var photoImage = document.createElement('img');
        photoImage.className = 'photoImage';

        photoImage.setAttribute('src', photo.thumbnailUrl);
        photoContainer.appendChild(photoImage);

        albumContainer.appendChild(photoContainer);
    });
}