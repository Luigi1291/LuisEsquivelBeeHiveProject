window.addEventListener('load', init, false);

function init() {
	console.log('App running!');
	//1. Declare variables
	//2. Initialize variables
	//3. Program Logic

	//this.dataManager = new DataManager(this);
	//this.dataManager.startPostsDownload();

	this.beesManager = new beesManager(this);
	this.beesManager.downloadBees();
	
	this.postsManager = new postsManager(this);
	this.postsManager.downloadPosts();

	this.albumsManager = new albumsManager(this);
	this.albumsManager.downloadAlbums();	

	this.todosManager = new todosManager(this);
	this.todosManager.downloadToDos();
}
/*
function displayMenu(){
   		document.getElementById('ham-menu').attr('display','flex');
	} */