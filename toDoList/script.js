
const text = document.getElementById("td");
const containerNotes = document.getElementById("containerNotes");
const del = document.getElementById("btnDelete");
const acc = document.getElementById("btnAccept");
const colorText = document.getElementById("colorText");
const colorBcg = document.getElementById("colorBcg");
const circleText = document.querySelector('.circleText-label');
const circleBcg = document.querySelector('.circleBcg-label');

document.addEventListener("keydown", function(e){
if (e.key === "Enter") {
    if (text.value.trim() !== "") {
    const newEl = document.createElement("div")
    newEl.classList.add("note");
    newEl.textContent = text.value;
    newEl.addEventListener("click", function () {
        this.classList.add("selected");
        document.getElementById("deleteWindow").style.display = "block";
        document.getElementById("container").style.filter = "blur(5px)";
        document.getElementById("container").style.pointerEvents = "none";
    })
    
    containerNotes.appendChild(newEl);
    text.value = "";
    }
}   
})

del.addEventListener("click", function(){
    const elToRemove = document.querySelector(".selected");

    if (elToRemove) {
        elToRemove.remove();
        document.getElementById("deleteWindow").style.display = "none";
        document.getElementById("container").style.filter = "blur(0px)";
        document.getElementById("container").style.pointerEvents = "all";
    }
    console.log(elToRemove);
})

acc.addEventListener("click", function() {
    const allNotes = document.querySelectorAll(".note");
    const selectedNotes = document.querySelectorAll('.note.selected');
    const textColor = colorText.value; 
    const bcgColor = colorBcg.value;

    if (selectedNotes.length > 0) {
        selectedNotes.forEach(note => {
            note.style.color = textColor; 
            note.style.background = bcgColor;
            note.classList.remove('selected');
            
        });
    }
    
    allNotes.forEach(note => note.classList.remove("selected"));
    document.getElementById("deleteWindow").style.display = "none";
    document.getElementById("container").style.filter = "blur(0px)";
    document.getElementById("container").style.pointerEvents = "all";
})

colorText.addEventListener("input", function(){
    circleText.style.background = colorText.value
})

colorBcg.addEventListener("input", function(){
    circleBcg.style.background = colorBcg.value
})






