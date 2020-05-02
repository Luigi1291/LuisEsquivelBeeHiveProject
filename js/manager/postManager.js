function postsManager(appManager) {
    this.appManager = appManager;
    this.appContainer = document.getElementById('postComponent');
    this.posts = [];
    this.comments = [];
}

postsManager.prototype.downloadPosts = function() {
    var url = 'https://beehive-270a2.firebaseio.com/data/posts.json';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.onreadystatechange = this.processPostsRequest.bind(this);
}

postsManager.prototype.processPostsRequest = function (e) {
    var request = e.target;
    if (request.readyState === 4) {
        //console.log(request);
        switch (request.status) {
            case 200:
                console.log('Posts Downloaded Successfully');
                this.processPostsResponse(request.responseText);
                break;
            case 404:
                console.log('Connection Error');
                break;
        }
    }
};

postsManager.prototype.processPostsResponse = function (text) {
    var data = JSON.parse(text);
    //console.log(data);
    this.posts = [];
    
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            var post = data[key];
            //console.log(post);
            this.posts.push(new Post(post.id, post.userId, post.title, post.body, []));
        }
    }
    this.downloadComments();
};

postsManager.prototype.downloadComments = function() {
    var url = 'https://beehive-270a2.firebaseio.com/data/comments.json';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.onreadystatechange = this.processCommentsRequest.bind(this);
}

postsManager.prototype.processCommentsRequest = function (e) {
    var request = e.target;
    if (request.readyState === 4) {
        //console.log(request);
        switch (request.status) {
            case 200:
                console.log('Comments Downloaded Successfully');
                this.processCommentsResponse(request.responseText);
                break;
            case 404:
                console.log('Connection Error');
                break;
        }
    }
};

postsManager.prototype.processCommentsResponse = function (text) {
    var data = JSON.parse(text);
    //console.log(data);
    this.comments = [];
    
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            var comment = data[key];
            this.comments.push(new BeeComment(comment.id, comment.postId, comment.name, comment.body, comment.email));
        }
    }
    this.loadComments();
};

postsManager.prototype.loadComments = function(){
    //Map Comments with Posts 
    this.posts.forEach(post => {
        var postComments = this.comments.filter(comment => comment.postId == post.id);
        post.comments = postComments;
    });
}

postsManager.prototype.loadUserPosts = function (beeId) {
    this.appContainer.innerHTML = '';
    new postsComponent(this.appContainer, this.posts, beeId, this.submitPost.bind(this), this.submitComment.bind(this), this.appManager.beesManager.getLoggedBee());
}

postsManager.prototype.submitPost = function(pPost){
    var newId = Math.max.apply(Math, this.posts.map(function(o) { return o.id; }));
    pPost.id = newId+1;

    this.posts.push(pPost);
    
    this.resetOverlay();
    this.loadUserPosts(pPost.userId);
}

postsManager.prototype.submitComment = function(pComment){
    var newId = Math.max.apply(Math, this.comments.map(function(o) { return o.id; }));
    pComment.id = newId+1;

    this.comments.push(pComment);
    var userPost = this.posts.filter(post => post.id == pComment.postId)[0];
    this.resetOverlay();
    
    //ReMapear Comentarios a los Posts
    this.loadComments();
    this.loadUserPosts(userPost.userId);
}

postsManager.prototype.resetOverlay = function(){
    document.getElementById('newComponent').innerHTML = '';
    document.getElementById('newComment').innerHTML = '';
}