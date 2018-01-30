let header = document.getElementById("page-header");
let saywhat = document.getElementById("output");
console.log("header: ", header);

function handleHeaderMouseEvent(event) {
    // console.log("event:", event.target, event.currentTarget);

    saywhat.innerHTML = "The force is strong with this one";

}
//.target will target an event which will show you what are you're hovering over

function handleHeaderMouseOut(event) {
    saywhat.innerHTML = "Remember... the Force will be with you always.";
}


let listItems = document.getElementsByClassName("list-item");
//array like item but an HTML collection
// console.log("listItems", listItems);

for(var i = 0; i < listItems.length; i++){
    listItems.item(i).addEventListener("click", handleClick);
}
//using parenthases around the 'i' because we're not using an array -- 'item' must be item. look up 'HTML collections' in Google

function handleClick(MouseEvent) {
    //click events:
    let elementText = MouseEvent.target.innerHTML;
    saywhat.innerHTML = "hmmm, " + elementText + " clicked you have";
}



header.addEventListener("mouseover", handleHeaderMouseEvent);
header.addEventListener("mouseout", handleHeaderMouseOut);