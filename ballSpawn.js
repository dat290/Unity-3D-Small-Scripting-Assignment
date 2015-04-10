//you need a ball in your prefabs folder.  also, if you want to give it bounce, you will have to create a physic material and plaec it in via the inspector


var ball : GameObject;
var readynow : boolean = true;

function Update () {

	if(readynow){
		MakeBall();
		
	}
	
}

function MakeBall(){
	readynow=false;
	Instantiate(ball, transform.position, transform.rotation);
	yield WaitForSeconds(1.5);
	readynow=true;
}