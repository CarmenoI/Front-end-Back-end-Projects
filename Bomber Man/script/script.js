/* create function that allows charecters to move in different directions */

/*link with keyboard  */
var objImage = null;
function init(){
  objImage=document.getElementById("image");
  objImage.style.position='relative';
  objImage.style.left='0px';
  objImage.style.top='0px';
}
function getKeyAndMove(e) {
  var key_code=e.which||e.keyCode;
  switch(key_code){
    case 37: //left arrow keyCode
      moveLeft();
      break;
    case 38: //up arrow keyCode
      moveUp();
      break;
    case 39: //right arrow keyCode
      moveRight();
      break;
    case 40: //down arrow keyCode
      moveDown();
      break;
  }
}
function moveLeft(){
  objImage.style.left=parseInt(objImage.style.left)-5 + 'px';
}
function moveUp(){
  objImage.style.top=parseInt(objImage.style.top)-5 + 'px';
}
function moveRight(){
  objImage.style.left=parseInt(objImage.style.left)+5 + 'px';
}
function moveDown(){
  objImage.style.top=parseInt(objImage.style.top)+5 + 'px';
}
window.onload=init;

 // {
 //  document.createElement("canvas"),
 //  start : function() {
 //    this.canvas.width = 100%;
 //    this.canvas.height = 100%;
 //
 //  }
