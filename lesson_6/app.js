const textInput = document.querySelector("#text-input");

const saveBtn = document.querySelector("#save-btn");

const notesContainer = document.querySelector(".notes");

const textCounter = document.querySelector("#text-counter");

const progressBar = document.querySelector(".progress-bar .inner-bar");

// ?? - null-coalescing operator
let notesArray = JSON.parse(localStorage["notes"] ?? "[]");
for (const note of notesArray) {
  if(!note) continue;
  const noteHTML = renderNote(note);
  notesContainer.appendChild(noteHTML);
}

saveBtn.onclick = () => {
    saveNote();
};

textInput.oninput = () => {
  let text = textInput.value;
  text = text.slice(0, 10);
  textInput.value = text;

  // update counter
  textCounter.textContent = `${10 - text.length} left`;
  progressBar.style.transform = `translateX(${-10 * text.length}%)`;
};

textInput.onchange = () => {
    saveBtn.click();
};

function saveNote() {
  const text = textInput.value;

  if(!text) return;

  const note = {
    id: notesArray.length + 1,
    text: text,
  };

  const noteHTML = renderNote(note);
  notesContainer.appendChild(noteHTML);

  // save note to local storage
  notesArray.push(note);
  const notesArrayJson = JSON.stringify(notesArray);
  localStorage.setItem("notes", notesArrayJson);

  textInput.value = "";
  textInput.focus();
  textCounter.textContent = "10 left";
  progressBar.style.transform = "translateX(0)";
}

function removeNote(noteId){
  const index = notesArray.findIndex(note => note?.id === noteId);
  if(index === -1) return;
  // notesArray.splice(index, 1);
  // notesArray = notesArray.filter(note => note.id !== noteId);
  delete notesArray[index];

  // let firstPart = notesArray.slice(0, index);
  // let secondPart = notesArray.slice(index + 1);
  // notesArray = firstPart.concat(secondPart);

  notesArray = notesArray.toSpliced(index, 1);

  
  localStorage.setItem("notes", JSON.stringify(notesArray));
  // location.reload();
}

[1,2,3,4,5]
2
/* <div class="note">
    <div class="note__body">My first note</div>
    <div class="note__footer" style="justify-content: flex-end">
        <button class="note__delete">Remove</button>
    </div>
</div> */
function renderNote(note) {
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "note__delete";
  removeBtn.onclick = () => {
    removeNote(note.id);
    const targetNote = document.getElementById(note.id);
    // removeBtn.parentElement.parentElement.remove();
    targetNote.remove();
  }

  const noteFooter = document.createElement("div");
  noteFooter.className = "note__footer";
  noteFooter.style.justifyContent = "flex-end";
  noteFooter.appendChild(removeBtn);

  const noteBody = document.createElement("div");
  noteBody.className = "note__body";
  noteBody.textContent = note.text;

  const noteContainer = document.createElement("div");
  noteContainer.className = "note";
  noteContainer.append(noteBody, noteFooter);
  noteContainer.id = note.id;

  return noteContainer;
}

// JSON - JavaScript Object Notation


// falsy: false "" 0 NaN null undefined 


const aboutMe = {
  job: //null  
  {
    title: "full-stask",
    name: "Google Inc.",
    salary: null
    //  {
    //   value: 5000,
    //   currency: "USD"
    // }
  }
}