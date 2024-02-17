let NoteArray = [];

let NoteObject = function (pData, pType, pPriority, pAddress, pStar){
    this.data= pData;
    this.type= pType;
    this.priority = pPriority;
    this.address = pAddress;
    this.star = pStar;
}

NoteArray.push (new NoteObject("McDonald", "Fast Food", 1, "3239 156th Ave SE, Bellevue, WA 98007", "5 Stars"));
NoteArray.push (new NoteObject("Rain Cafe", "Cafe", 2, "13200 Aurora Ave N suite c, Seattle, WA 98133", "4 Stars"));
NoteArray.push (new NoteObject("El Gran Taco", "Food Truck", 3, "Seattle, WA 98122", "5 Stars"));


let selectedType = "";
let starRating ="";
document.addEventListener("DOMContentLoaded", function(event){

    createList();

    document.getElementById("buttonAdd").addEventListener("click", function (){

        NoteArray.push (new NoteObject(document.getElementById("dataInput").value, selectedType, 
        document.getElementById("priorityInput").value, document.getElementById("addressInput").value,starRating ));

        document.getElementById("dataInput").value = "";
        document.getElementById("priorityInput").value = "";
        document.getElementById("addressInput").value = "";

        createList();
    });

    $(document).bind("change", "#select-type", function (event, ui){
        selectedType = document.getElementById("select-type").value;
    });
    $(document).bind("change", "#star-rating", function (event, ui){
        starRating = document.getElementById("star-rating").value;
    });
});

//create the function to add list 
function createList(){
    var myul = document.getElementById("myul");
    myul.innerHTML = "";

    NoteArray.forEach(function (element,) {
        var li = document.createElement('li');
        li.innerHTML = element.priority + ": " + element.type + " | " 
                    + element.data + " | " + element.address + " | " +
                    element.star;
        myul.appendChild(li);
    });
};