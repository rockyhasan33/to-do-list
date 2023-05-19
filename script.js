const ulToDo = document.querySelector('.order-list');
const addingBtn = document.querySelector('.adding-btn');
const inputField = document.querySelector('.to-do-input')
const orderList = document.querySelector('.order-list')
let errorText = document.querySelector('.error');

// let list = document.querySelectorAll('li')






addingBtn.addEventListener('click', () =>  {


    let createList = document.createElement('li')
    let doneIcon = document.createElement('i');
    doneIcon.classList = `fa-solid fa-trash`
    createList.classList = 'myLi'
    createList.innerText = inputField.value;
    

    if(createList.innerText === '') {
        errorText.innerText = 'Please Type Something...'
        return
    }else {
        orderList.insertAdjacentElement('afterbegin',createList);
        errorText.innerText = ''; 
        inputField.value = '';
    }

    
    

})


