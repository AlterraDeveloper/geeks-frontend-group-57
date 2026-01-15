const textInput = document.querySelector("#text-input");

const saveBtn = document.querySelector("#save-btn");

const notesContainer = document.querySelector(".notes");

let notesArray = JSON.parse(localStorage["notes"] ?? "[]");
for (const note of notesArray) {
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
};

textInput.onchange = () => {
    saveBtn.click();
};

function saveNote() {
  const text = textInput["value"];

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
}

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

  return noteContainer;
}

// JSON - JavaScript Object Notation
