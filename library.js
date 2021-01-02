const bookForm=document.getElementById('newBookForm');
let myLibrary=[];

function Book(title,author,numPages,hasRead){

    this.title=title;
    this.author=author;
    this.numPages=numPages;
    this.hasRead=hasRead;

    

}

Book.prototype.toString=function bookToString(){

    let readStatus='';

    if(this.hasRead){
        readStatus='I have read this book';
    }else{
        readStatus='Too long, did not read';
    }

    return `Title: ${this.title}\nAuthor: ${this.author}\n# of pages: ${this.numPages}\n${readStatus}`
}
function addToLibrary(newBook){
    
    myLibrary.push(newBook);
}
function showLibrary(){
    myLibrary.forEach(function(item){
        console.log(item.toString())
    })
}
function openBookForm(){

    bookForm.classList.remove('invisible');
    bookForm.classList.add('visible');

    
}
function checkInput(){

    let title=document.querySelector('#title').value;
    let author=document.querySelector('#author').value;
    let numPages=document.querySelector('#numPages').value;
    let hasRead=document.querySelector('#hasRead').checked;

    if(!(title && author && numPages)){
        console.log('Title, author and page number cannot be left empty');
     
        
    }else{

        //console.log(`Title: ${title}\nAuthor: ${author}\n# of pages: ${numPages}\nHas Read?: ${hasRead}`);
        submitBook(title,author,numPages,hasRead)
    }
   
}
function submitBook(title,author,numPages,hasRead){
   
    //console.log(`The book, ${title}, has been submitted yo`);
    bookToAdd=new Book(title,author,numPages,hasRead);
    console.log(bookToAdd.toString());
    addToLibrary(bookToAdd);
    closeForm();
    
}
function cancelBook(){
    closeForm();
    bookForm.classList.add('invisible');
    bookForm.classList.remove('visible');
}
function closeForm(){

    document.getElementById('entryForm').reset();

    

}
