function postsComponent(container, posts, userId){
    this.container =  container;
    this.userPosts = posts.filter(post => post.userId == userId);
    
    console.log(this.userPosts);

    if(this.userPosts.length > 0){
        this.userPosts.forEach(post => {
            var newUIPost = new postComponent(post);
        
            this.container.appendChild(newUIPost);    
        });
    }

    var newPostButton = document.createElement('div');
    newPostButton.className = 'newPostButton';
    newPostButton.innerText = "New Post";

    this.container.appendChild(newPostButton);
}