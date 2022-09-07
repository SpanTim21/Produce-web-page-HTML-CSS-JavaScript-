let student = [];
let btnSubmit = document.getElementById("studentAdd");
btnSubmit.addEventListener('click', studentAdd);

let btnReset = document.getElementById("studentReset")
btnReset.addEventListener("click", reset);

function Student (firstname, lastname, birthdate, tuitionfee){
    this.firstname = firstname
    this.lastname = lastname
    this.birthdate = birthdate
    this.tuitionfee = tuitionfee
}

function studentAdd(event){
    event.preventDefault();
    let studentFirstname = document.getElementById("studentFirstname");
    let studentLastname = document.getElementById("studentLastname");
    let birthDate = document.getElementById("birthDate");
    let tuitionFee = document.getElementById("tuitionFee");
    let Studentform = new Student (studentFirstname.value, studentLastname.value, studentbirthDate.value, studenttuitionFee.value);
    student.push(Studentform);
    let btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnEdit.studentIndex = student.length - 1;
    btnEdit.addEventListener("click", edit);
    console.log(btnEdit.studentIndex);
    btnEdit.addEventListener("click", edit);
    createParagraphElement(Studentform, btnEdit);
    btnReset.click();
    console.log(student);
}

function reset(event) {
    console.log("Form is reset");
    btnSubmit.textContent = "Add";
}

function edit(event) {
    studentFirstname.value = student[this.studentIndex].firstname;
    studentLastname.value = student[this.studentIndex].lastname;
    studentbirthDate.value = student[this.studentIndex].birthDate;
    studenttuitionFee.value = student[this.studentIndex].tuitionfee;
    btnSubmit.textContent ="Update" ;
    btnSubmit.addEventListener("Click", update);
    btnSubmit.studentIndex  = this.studentIndex;
    btnSubmit.student = new Student( studentFirstname.value, studentLastname.value,  studentbirthDate.value, studenttuitionFee.value  );
    console.log(studentToString(student[this.studentIndex]));
}

function update(){
    console.log(this.studentIndex);
    console.log(studentToString(this.firstname));
}

function studentToString(Studentform){
    return (` ${Studentform.firstname} ${Studentform.lastname} ${Studentform.birthdate} ${Studentform.tuitionfee}`)
}

function createParagraphElement(student, editButton){
    let paragraph = document.createElement("p");
    paragraph.innerText = studentToString(student);
    let spanSpace = document.createElement("span");
    spanSpace.innerHTML = "&nbsp";
    paragraph.append(spanSpace,editButton);
    document.body.append(paragraph);
    console.log(editButton.studentIndex);
}