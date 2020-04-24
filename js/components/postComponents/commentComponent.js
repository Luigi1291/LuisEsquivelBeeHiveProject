function commentComponent(postContainer, post){
    post.comments.forEach(comment => {
        var commentContainer = document.createElement('div');
        commentContainer.className = 'commentComponent';
        
        var title = document.createElement('p');
        title.className = 'commentTitle';
        title.innerText = comment.name;
        commentContainer.appendChild(title);
    
        var body = document.createElement('p');
        body.className = 'commentBody';
        body.innerText = comment.body;
        commentContainer.appendChild(body);
    
        var email = document.createElement('p');
        email.className = 'commentEmail';
        email.innerText = comment.email;
        commentContainer.appendChild(email);
    
        postContainer.appendChild(commentContainer);

        var newCommentButton = document.createElement('div');
        newCommentButton.className = 'newCommentButton';
        newCommentButton.innerText = "New Comment";

        postContainer.appendChild(newCommentButton);
    });
}