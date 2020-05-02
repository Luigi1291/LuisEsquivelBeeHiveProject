function postsComponent(container, posts, beeId, submitPostCallBack, submitCommentCallBack, loggedBee){
    this.container = container;
    this.userPosts = posts.filter(post => post.userId == beeId);
    
    this.newPostComponent = new newPostComponent(beeId, submitPostCallBack, 1, loggedBee);
    this.newPostComponent.renderOverlay();

    this.newCommentComponent = new newPostComponent('', submitCommentCallBack, 2, loggedBee);
    this.newCommentComponent.renderOverlay();
    
    if(this.userPosts.length > 0){
        this.userPosts.forEach(post => {
            var newUIPost = new postComponent(post, this.newCommentComponent);
        
            this.container.appendChild(newUIPost);    
        });
    }

    var newPostButton = document.createElement('div');
    newPostButton.className = 'newPostButton';
    newPostButton.innerText = "New Post";
    
    newPostButton.onclick = this.newPostComponent.showNewPostOverlay;

    this.container.appendChild(newPostButton);
}