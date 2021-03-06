function beeComponent(bee, onClickPosts, onClickAlbums, onClickToDos){
    this.bee = bee;
    var beeContainer = document.createElement('div');
    beeContainer.className = 'beeComponent';
    
    var image = document.createElement('img');
    image.className = 'beeImage';
    image.src = '/images/user.png';

    var containerImage = document.createElement('div');
    containerImage.className = 'container-image';
    containerImage.appendChild(image);

    beeContainer.appendChild(containerImage);

    var containterText = document.createElement('div');
    containterText.className = 'container-beeText';

    var name = document.createElement('p');
    name.className = 'beeName';
    name.innerText = bee.name;
    containterText.appendChild(name);

    var username = document.createElement('p');
    username.className = 'beeInfo';
    username.innerText = bee.username;
    containterText.appendChild(username);

    var email = document.createElement('p');
    email.className = 'beeInfo';
    email.innerText = bee.email;
    containterText.appendChild(email);

    var phone = document.createElement('p');
    phone.className = 'beeInfo';
    phone.innerText = bee.phone;
    containterText.appendChild(phone);

    var city = document.createElement('p');
    city.className = 'beeInfo';
    city.innerText = bee.city;
    containterText.appendChild(city);

    beeContainer.appendChild(containterText);

    var buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'containter-buttons';

    var btnPost = document.createElement('div');
    btnPost.className = 'button';
    btnPost.innerText = 'Posts';
    this.onClickPosts = onClickPosts;
    btnPost.onclick = this.onClickPostCallBack.bind(this);
    buttonsContainer.appendChild(btnPost);

    var btnAlbum = document.createElement('div');
    btnAlbum.className = 'button';
    btnAlbum.innerText = 'Album';
    this.onClickAlbums = onClickAlbums;
    btnAlbum.onclick = this.onClickAlbumCallBack.bind(this);
    buttonsContainer.appendChild(btnAlbum);

    var btnTodo = document.createElement('div');
    btnTodo.className = 'button';
    btnTodo.innerText = 'Todos';
    this.onClickToDos = onClickToDos;
    btnTodo.onclick = this.onClickToDoCallBack.bind(this);
    buttonsContainer.appendChild(btnTodo);

    beeContainer.appendChild(buttonsContainer);

    return beeContainer;
}

beeComponent.prototype.onClickPostCallBack = function (){
    this.onClickPosts(this.bee);
}

beeComponent.prototype.onClickAlbumCallBack = function (){
    this.onClickAlbums(this.bee);
}

beeComponent.prototype.onClickToDoCallBack = function (){
    this.onClickToDos(this.bee);
}