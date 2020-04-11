function beeComponent(bee){
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
    buttonsContainer.appendChild(btnPost);

    var btnAlbum = document.createElement('div');
    btnAlbum.className = 'button';
    btnAlbum.innerText = 'Album';
    buttonsContainer.appendChild(btnAlbum);

    var btnTodo = document.createElement('div');
    btnTodo.className = 'button';
    btnTodo.innerText = 'Todos';
    buttonsContainer.appendChild(btnTodo);

    beeContainer.appendChild(buttonsContainer);
    return beeContainer;
}