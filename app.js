const userInput = document.getElementById("userInput");
const button = document.getElementById("submit");
let listContainer = document.querySelector(".listContainer");


button.addEventListener("click", () => {
    if(userInput.value === ""){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");

        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        li.append(checkBox);

        let p = document.createElement("p");
        p.innerText = userInput.value;

        let img = document.createElement("img");
        img.src = "./img/trashIcon.svg";

        li.append(p);
        li.append(img);
        listContainer.append(li);

        checkBox.addEventListener("click", () =>{
            p.classList.toggle("checked");
        })

        img.addEventListener("click",() => { // arrow function to delete the parentElement of the img variable
            img.parentElement.remove();
        })

    }
    
    userInput.value = "";
})


