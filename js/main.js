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


var yodaImage = document.getElementById("theYoda");

// #001
document.getElementById("change-color").addEventListener("click", () =>{
    yodaImage.classList.toggle("flashy");
}); 

/* #002 
document.getElementById("change-color").addEventListener("click", function() {
    yodaImage.classList.toggle("flashy");
});   

#003
document.getElementById("change-color").addEventListener("click",toggle);
function toggle(event) {
    yodaImage.classList.toggle("flashy");
};   
*/


document.getElementById("force-lots-of").addEventListener("click", () => {
  yodaImage.classList.toggle("moreforce");
});

document.getElementById("add-border").addEventListener("click", () => {
  yodaImage.classList.toggle("bordered");
});



document.getElementById("starwars").addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() === "li"){
    console.log("You clicked on an <li> item");
    }
    if (event.target.className == "list-item"){
        console.log("you clicked on a list-item element");
    }
}); //this function shows in the console log that you clicked on a list item


var quotesArray = [
    "A long time ago in a galaxy far, far away…",
    "Use the force, Luke.",
    "The force is strong with this one.",
    "Do. Or do not. There is no try.",
    "Fear is the path to the dark side.",
    "Someday I will be the most powerful Jedi ever.",
    "You were the chosen one!"
    ]



    quotesArray.forEach((quote, index) => {
        let quoteBlock = `<div id="quote--${index}">
                            <h3>"${quote}" - Star Wars</h3>
                            </div>`;

        let quoteDiv = document.createElement("div");
        quoteDiv.innerHTML = quoteBlock;

        document.getElementById("stickItHere").appendChild(quoteDiv);
        //allows us to place it on the DOM as a node

        let quoteDom = document.getElementById(`quote--${index}`);
        //use back ticks to evaluate the variable index, which is part of the forEach, WHICH IS getting the element to target the specific items

        quoteDom.addEventListener("click", () => {
            event.currentTarget.classList.add("accent");

        });
    })

    //${} TEMPLATE STRINGS