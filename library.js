function openBookForm(){
    //console.log('Here is where you add a fucking book!!11');
    const bookForm=document.getElementById('newBookForm');
    bookForm.style.display='block';
}
function submitBook(){
    let title=document.querySelector('#title').value;
    let author=document.querySelector('#author').value;
    let numPages=document.querySelector('#numPages').value;
    let hasRead=document.querySelector('#hasRead').checked;

    console.log(`title: ${title}\nauthor: ${author}\nnumPages: ${numPages}\nhasRead: ${hasRead}\n`);

    closeForm();
}
function cancelBook(){
    closeForm();
}
function closeForm(){
    const bookForm=document.getElementById('newBookForm');
    bookForm.style.display='none';
}
