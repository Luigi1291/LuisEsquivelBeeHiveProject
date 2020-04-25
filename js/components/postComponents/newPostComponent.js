function newPostComponent(entry, submitCallBack, isNewPost){
    var overlayContainer = document.getElementById('newPostComponent');

    this.overlayContainer = overlayContainer;
    this.entry = entry;
    this.submitCallBack = submitCallBack;
    this.isNewPost = isNewPost;

    var textContainer = document.createElement('div');
    textContainer.className = 'overlay-textContainer';
    
    var newPostText = document.createElement('p');
    newPostText.className = 'overlay-Title';
    newPostText.innerText = 'NEW POST';
    textContainer.appendChild(newPostText);

    var title = document.createElement('p');
    title.className = 'overlay-text';
    title.innerText = 'Title';
    textContainer.appendChild(title);

    var inputTitle = document.createElement('input');
    inputTitle.className = 'overlay-input';
    inputTitle.setAttribute('type','text');
    this.inputTitle = inputTitle;
    textContainer.appendChild(inputTitle);

    var body = document.createElement('p');
    body.className = 'overlay-text';
    body.innerText = 'Body';
    textContainer.appendChild(body);

    var inputBody = document.createElement('input');
    inputBody.className = 'overlay-input';
    inputBody.setAttribute('type','text');
    this.inputBody = inputBody;
    textContainer.appendChild(inputBody);
    
    overlayContainer.appendChild(textContainer);

    var buttonContainer = document.createElement('div');
    buttonContainer.className = 'overlay-button-container';

    var btnCancel = document.createElement('div');
    btnCancel.className = 'overlay-button-cancel';
    btnCancel.innerText = 'Cancel';
    btnCancel.onclick = this.hideNewPostOverlay.bind(this);
    buttonContainer.appendChild(btnCancel);

    var btnSubmit = document.createElement('div');
    btnSubmit.className = 'overlay-button-submit';
    btnSubmit.innerText = 'Ok';
    btnSubmit.onclick = this.submitNewPost.bind(this);

    buttonContainer.appendChild(btnSubmit);

    textContainer.appendChild(buttonContainer);
    overlayContainer.appendChild(textContainer);
}

newPostComponent.prototype.submitNewPost = function(){
    var newSubmit;
    if(this.isNewPost){
        newSubmit = new Post('',this.entry.id,this.inputTitle.value, this.inputBody.value,[]);    
    } else
    {
        newSubmit = new BeeComment();
    }
    
    this.submitCallBack(newSubmit);
    this.hideNewPostOverlay();
}

newPostComponent.prototype.showNewPostOverlay = function (){
    var overlayContainer = document.getElementById('newPostComponent');
    overlayContainer.style.display = 'flex';
}

newPostComponent.prototype.hideNewPostOverlay = function (){
    this.overlayContainer.style.display = 'none';

    this.inputTitle.value = '';
    this.inputBody.value = '';
}