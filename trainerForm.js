let trainerArray = [];
let btnSubmit = document.getElementById("trainerAdd");
btnSubmit.addEventListener("click", submit);

let btnReset =document.getElementById("trainerReset");
btnReset = addEventListener("click", reset); 

function Trainer (firstname, lastname, subject){
    this.lastname = lastname;
    this.firstname = firstname;
    this.subject = subject;
}

function trainerToString(trainer){
    return (`${trainer.lastname} ${trainer.firstname} ${trainer.subject}`);
}

function submit(event){
    event.preventDefault();
    let trainerFirstname = document.getElementById('trainerFirstname');
    let trainerLastname = document.getElementById('trainerLastname');
    let subjectName = document.getElementById('subjectName');
    let newTrainer = new Trainer (trainerFirstname.value, trainerLastname.value, subjectName.value);
    trainerArray.push(newTrainer);
    let btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnEdit.trainerArrayIndex = trainerArray.length - 1;
    btnEdit.addEventListener("click", edit);
    createParagraphElement(newTrainer, btnEdit);
    console.log(newTrainer);
    

}

function reset(event){
    console.log("Form is reset");
}

function edit(event){
    Firstname.value = trainerArray[this.trainerArrayIndex].firstname;
    Lastname.value = trainerArray[this.trainerArrayIndex].lastname;
    subjectName.value = trainerArray[this.trainerArrayIndex].subject;
    console.log(trainerToString(trainerArray[this.trainerArrayIndex]));
}

function createParagraphElement(Trainer, editButton){
    let paragraph = document.createElement("p");
    paragraph.innerText = trainerToString(Trainer);
    let spanSpace = document.createElement("span");
    spanSpace.innerHTML = "&nbsp";
    paragraph.append(spanSpace,editButton);
    document.body.append(paragraph);
    console.log(editButton.trainerArrayIndex);
}