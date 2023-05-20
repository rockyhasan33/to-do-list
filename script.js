const ulToDo = document.querySelector('.order-list');
const addingBtn = document.querySelector('.adding-btn');
const inputField = document.querySelector('.to-do-input')
const orderList = document.querySelector('.order-list')
let errorText = document.querySelector('.error');

// let list = document.querySelectorAll('li')






addingBtn.addEventListener('click', () =>  {


    let createList = document.createElement('li')
    let deleteIcon = document.createElement('i');
    let doneIcon = document.createElement('i');
    doneIcon.classList = 'fa-solid fa-check'
    doneIcon.title = 'click and double click'
    deleteIcon.classList = `fa-solid fa-trash`
    deleteIcon.title = 'Click for Delete'
    createList.classList = 'myLi'
    createList.innerText = inputField.value;
    

    if(createList.innerText === '') {
        errorText.innerText = 'Please Type Something...'
        return
    }else {
        orderList.insertAdjacentElement('afterbegin',createList);
        errorText.innerText = ''; 
        inputField.value = '';
        createList.append(deleteIcon)
        createList.append(doneIcon)
    }

    deleteIcon.addEventListener('click', () => {
        orderList.removeChild(createList)
    },true);

    doneIcon.addEventListener('click', (e) => {
        if (e.bubbles) {
        createList.style.textDecoration = 'line-through'
        } else {
            
    }
        
    }, true)

    doneIcon.addEventListener('dblclick', () => {
        createList.style.textDecoration = 'none'
        
    }, true)

    

    
    

})


