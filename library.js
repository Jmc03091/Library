const table = document.querySelector('table');
const submit = document.querySelector('.submitBtn');
const newBtn = document.querySelector('.newBtn');
const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');
let myLibrary = [];

class Book {
  
  constructor(title, author, pages, read) {
    this.title = inputs[0].value;
    this.author = inputs[1].value;
    this.pages = inputs[2].value;
    this.read = inputs[3].value;
  }
  
  info() {
    return title + " by " + author + ", " + pages + "pages, " + read;
  }
}
    

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function loopArray(arr) {
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  let change = document.querySelectorAll('td');
  const delBtn = document.createElement('button');
  const readBtn = document.createElement('button');
  
  delBtn.textContent = 'delete';
  delBtn.classList.add('delBtn');
  delBtn.style = 'display:inline;float:right;';
  delBtn.style.position = "relative";
  
  readBtn.textContent = 'Change Read Status';
  readBtn.classList.add('readBtn');
  readBtn.style = 'display:inline; float:right;';

  
  for(let i of arr){
    table.appendChild(tr);
    table.appendChild(td);
    td.textContent = JSON.stringify(i,null,4);
    td.setAttribute('colspan', 2);
    td.appendChild(delBtn);
    td.appendChild(readBtn);
    td.setAttribute('data-attribute', myLibrary.length - 1);
    
  }
  
  delBtn.addEventListener('click', (e) => {
    for(let i = 0; i < myLibrary.length; i++){
      myLibrary.splice(td.getAttribute('data-attribute'), 1);
      td.remove();
      delBtn.remove();
      readBtn.remove();
    }
  });
  
  readBtn.addEventListener('click', () => {
    
    const bookIndex = td.getAttribute('data-attribute');
    
    if(myLibrary[bookIndex].read.toLowerCase() === "Read".toLowerCase()){
      myLibrary[bookIndex].read = "Not Read Yet";
    }
    else if(myLibrary[bookIndex].read.toLowerCase() === "Not Read Yet".toLowerCase()) {
      myLibrary[bookIndex].read = "Read";
    }
    else if(!myLibrary[bookIndex].read) {
      myLibrary[bookIndex].read = "Invalid Entry"
    }
    
    td.textContent = JSON.stringify(myLibrary[bookIndex]);
    
    td.appendChild(delBtn);
    td.appendChild(readBtn);
  });  
  
}

newBtn.addEventListener('click', (e) => {
  
  labels.forEach((e) => {
    e.style.visibility = "visible";
  });
  
  inputs.forEach((e) => {
    e.style.visibility = "visible";
  });
  
});

submit.addEventListener('click', (e) => {
  for(let i of inputs){
    if(!inputs.value || inputs.value) {
      e.preventDefault();
    }
  }
    addBookToLibrary(new Book);
    loopArray(myLibrary);
    
});
  
  
  





