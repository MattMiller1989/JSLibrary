const bookForm=document.getElementById('newBookForm');
//bookForm.classList.add('invisible');
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

        console.log(`Title: ${title}\nAuthor: ${author}\n# of pages: ${numPages}\nHas Read?: ${hasRead}`);
        submitBook(title,author,numPages,hasRead)
    }
   
}
function submitBook(title,author,numPages,hasRead){
   
    console.log(`The book, ${title}, has been submitted yo`);
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
