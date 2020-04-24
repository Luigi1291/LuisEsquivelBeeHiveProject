function postComponent(post){
    var postContainer = document.createElement('div');
    postContainer.className = 'postComponent';

    var containterText = document.createElement('div');
    containterText.className = 'container-postText';

    var title = document.createElement('p');
    title.className = 'postTitle';
    title.innerText = post.title;
    containterText.appendChild(title);

    var body = document.createElement('p');
    body.className = 'postBody';
    body.innerText = post.body;
    containterText.appendChild(body);

    postContainer.appendChild(containterText);

    //Adding comments UI
    commentComponent(postContainer, post);

    return postContainer;
}