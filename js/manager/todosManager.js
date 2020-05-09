function todosManager(appManager) {
    this.appManager = appManager;
    this.appContainer = document.getElementById('toDoComponent');
    this.toDos = [];
}

todosManager.prototype.downloadToDos = function() {
    var url = 'https://beehive-270a2.firebaseio.com/data/todos.json';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.onreadystatechange = this.processToDosRequest.bind(this);
}

todosManager.prototype.processToDosRequest = function (e) {
    var request = e.target;
    if (request.readyState === 4) {
        //console.log(request);
        switch (request.status) {
            case 200:
                console.log('ToDos Downloaded Successfully');
                this.processToDosResponse(request.responseText);
                break;
            case 404:
                console.log('Connection Error');
                break;
        }
    }
};

todosManager.prototype.processToDosResponse = function (text) {
    var data = JSON.parse(text);
    //  console.log(data);
    this.toDos = [];
    
    //Current User
    this.toDos.push(new ToDo('1000',true,'Testing ToDo','0'));
    this.toDos.push(new ToDo('1001',false,'Pending ToDo','0'));

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            var todo = data[key];
            //console.log(album);
            this.toDos.push(new ToDo(todo.id, todo.completed, todo.title, todo.userId));
        }
    }
};

todosManager.prototype.loadToDos = function(beeId){
    this.appContainer.innerHTML = '';
    var userToDos = this.toDos.filter(todo => todo.userId == beeId);
    
    new toDosComponent(this.appContainer, userToDos, beeId, this.submitToDo.bind(this));
}

todosManager.prototype.submitToDo = function(toDo){
    var newId = Math.max.apply(Math, this.toDos.map(function(o) { return o.id; }));
    toDo.id = newId+1;

    this.toDos.push(toDo);
    
    this.resetOverlay();
    this.loadToDos(toDo.userId);
}

todosManager.prototype.resetOverlay = function(){
    document.getElementById('newToDo').innerHTML = '';
}