function openBookForm(){
    //console.log('Here is where you add a fucking book!!11');
    const bookForm=document.getElementById('newBookForm');
    bookForm.style.display='block';
}
function bookSubmit(){

}
function bookCancel(){
    closeForm();
}
function closeForm(){
    const bookForm=document.getElementById('newBookForm');
    bookForm.style.display='none';
}
