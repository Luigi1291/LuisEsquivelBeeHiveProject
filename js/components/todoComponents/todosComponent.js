function toDosComponent(container, toDos, beeId, submitCallBack){
    this.container =  container;
    this.newToDoComponent = new newPostComponent(beeId, submitCallBack, 3, '');
    this.newToDoComponent.renderOverlay();
    
    toDos.forEach(toDo => {
        var toDoContainer = document.createElement('div');
        toDoContainer.className = 'toDoComponent';

        var title = document.createElement('p');
        title.className = 'toDoTitle';
        title.innerText = toDo.title;
        toDoContainer.appendChild(title);
        
        var buttonCompleted = document.createElement('div');
        buttonCompleted.className = 'toDoButton';
        buttonCompleted.innerText = (toDo.completed ? 'Completed': 'Pending');
        toDoContainer.appendChild(buttonCompleted);

        this.container.appendChild(toDoContainer);    
    });

    var newToDoButton = document.createElement('div');
    newToDoButton.className = 'newToDoButton';
    newToDoButton.innerText = "New ToDo";
    newToDoButton.onclick = this.newToDoComponent.showNewPostOverlay;
    
    this.container.appendChild(newToDoButton);
}