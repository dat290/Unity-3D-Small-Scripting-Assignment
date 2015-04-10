var time : float;

function Update () {
  time -= Time.deltaTime;
  if(time <= 0) {
  Destroy(GameObject.Find("ThirdPersonController"));
    //GameObject.Find("Cube").GetComponent(Killable).Kill();
  }
}