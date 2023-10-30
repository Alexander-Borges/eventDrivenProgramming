const scrollable = document.getElementById("scrollable");
const button = document.querySelector("button");

scrollable.addEventListener("click", targetEvent => {
    if (targetEvent.target !== this) {
        targetEvent.target.textContent = "Clicked";// changese the text content of whatever element that is clicked
    }
});

//button.addEventListener("dragstart", dragEvent =>{
//    console.log(dragEvent);//makes the element draggable
//})

//scrollable.addEventListener("drop", dragEvent => {
//    scrollable.prepend(button);// allows user to drop element into another container
//})

//scrollable.addEventListener("dragover", dragEvent => {
///    dragEvent.preventDefault();// need this to prevent the default behavior which won't allow the drop
//})


scrollable.addEventListener("scroll", event => {
    console.log(event.target.scrollTop);// fires events with the scroll top values. 
})
scrollable.addEventListener("mouseenter", event => {
    console.log(event.pageX, event.pageY);// logs out where the mouse is
});



//window.addEventListener("keydown", newEvent => {
  //  console.log(newEvent.code)// Console logs any key that is pressed
//})


//const button = document.querySelector("button");

//button.addEventListener("dblclick", onClick);//only responds to a double-click
//button.addEventListener("mouseup", onClick);//fires when mouse is clicked back up - mouse down works the same in reverse


//button.removeEventListener("click",onClick);//manually removes the event

//document.body.addEventListener("click", onClick,{
  //  capture: true,// event listener will run during capture phase
  //  once: true,// event will only happen once
   // passive: true,// if true we are telling the browser we will not run event.preventDefault
    //signal: abortController.signal //
//});

//function onClick(event){
    //event.stopPropagation();// event propagation - the process by which an event travels through the DOM to call event listeners on nested elements. Event propagation consists of 3 phases. 1. Capturing 2. Target 3. Bubbling
    //event.preventDefault();// stops the default event in the browser. 
    //console.log(event.type);//pointer event
  //  console.log(event.target);//what the event fired on
   // console.log(this);// Logs out whatever what before eventListener
    //console.log("You clicked the button ");
//}