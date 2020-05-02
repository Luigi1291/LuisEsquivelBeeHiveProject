function newPostComponent(entry, submitCallBack, overlayType, loggedBee){
    var overlayContainer = document.getElementById('newComponent');
    this.overlayContainer = overlayContainer;

    if(overlayType == 2){
        this.overlayContainer = document.getElementById('newComment');
    }
    this.entry = entry;
    this.submitCallBack = submitCallBack;
    this.overlayType = overlayType;
    this.loggedBee = loggedBee;
}

newPostComponent.prototype.updateEntry = function(entry){
    this.entry = entry;
}

newPostComponent.prototype.renderOverlay = function(){
    var textContainer = document.createElement('div');
    textContainer.className = 'overlay-textContainer';
    
    var newText = document.createElement('p');
    newText.className = 'overlay-Title';
    switch (this.overlayType) {
        case 1:
            newText.innerText = 'NEW POST';
            break;
        case 2: 
            newText.innerText = 'NEW COMMENT';
            break;
        case 3: 
            newText.innerText = 'NEW TODO';
            break;
    }

    textContainer.appendChild(newText);

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
    
    var inputBody = document.createElement('input');
    inputBody.className = 'overlay-input';
    inputBody.setAttribute('type','text');
    this.inputBody = inputBody;
    
    if(this.overlayType != 3){
        textContainer.appendChild(body);
        textContainer.appendChild(inputBody);
    }
    
    this.overlayContainer.appendChild(textContainer);

    var buttonContainer = document.createElement('div');
    buttonContainer.className = 'overlay-button-container';

    var btnCancel = document.createElement('div');
    btnCancel.className = 'overlay-button-cancel';
    btnCancel.innerText = 'Cancel';
    btnCancel.onclick = this.hideNewPostOverlay.bind(this);
    this.showNewPostOverlay.bind(this);
    
    buttonContainer.appendChild(btnCancel);

    var btnSubmit = document.createElement('div');
    btnSubmit.className = 'overlay-button-submit';
    btnSubmit.innerText = 'Ok';
    btnSubmit.onclick = this.submitNewPost.bind(this);

    buttonContainer.appendChild(btnSubmit);

    textContainer.appendChild(buttonContainer);
    this.overlayContainer.appendChild(textContainer);
}

newPostComponent.prototype.submitNewPost = function(){
    var newSubmit;
    // 1 -> NewPost, 2-> NewComment 3-> NewToDo
    switch (this.overlayType) {
        case 1:
            newSubmit = new Post('',this.entry,this.inputTitle.value, this.inputBody.value,[]);    
            break;
        case 2:
            newSubmit = new BeeComment('', this.entry.id, this.inputTitle.value, this.inputBody.value, this.loggedBee.email);
            break;
        case 3:
            newSubmit = new ToDo('',false,this.inputTitle.value, this.entry);
            break;
    }

    this.submitCallBack(newSubmit);
    this.hideNewPostOverlay();
}

newPostComponent.prototype.showNewPostOverlay = function (){
    var overlayContainer = document.getElementById('newComponent');
    overlayContainer.style.display = 'flex';
}

newPostComponent.prototype.showNewCommentOverlay = function (){
    var overlayContainer = document.getElementById('newComment');
    overlayContainer.style.display = 'flex';
}

newPostComponent.prototype.hideNewPostOverlay = function (){
    this.overlayContainer.style.display = 'none';

    this.inputTitle.value = '';
    this.inputBody.value = '';
}