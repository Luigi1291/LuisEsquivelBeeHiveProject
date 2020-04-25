function postsComponent(container, posts, bee, submitPostCallBack){
    this.container =  container;
    this.userPosts = posts.filter(post => post.userId == bee.id);
    this.newPostComponent = new newPostComponent(bee, submitPostCallBack, true);

    if(this.userPosts.length > 0){
        this.userPosts.forEach(post => {
            var newUIPost = new postComponent(post);
        
            this.container.appendChild(newUIPost);    
        });
    }

    var newPostButton = document.createElement('div');
    newPostButton.className = 'newPostButton';
    newPostButton.innerText = "New Post";
    
    newPostButton.onclick = this.newPostComponent.showNewPostOverlay;

    this.container.appendChild(newPostButton);
}