let savelistBtn = document.getElementById('saveList');
let errorMsg = document.getElementById('errorMsg');
let listModal = document.getElementById('createListModal');
let listNameInput = document.getElementById('inputData');
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.close');
let listContainer = document.getElementById('listContainer');
let listtitleName = document.getElementById('listTitle');

listNameInput.addEventListener('keyup', function(){
    errorMsg.setAttribute('class', 'd-none');
});
// style for the container
listContainer.style.marginTop = '5rem';
listContainer.style.marginRight = '10rem';
listContainer.style.marginLeft = '10rem';
listContainer.style.display = 'flex';
listContainer.style.flexDirection = 'column';

// list button created
// let listButton;
// let listButtonText;



savelistBtn.addEventListener('click', function(){
// we have to confirm if a value is in the input
    let inputValue = listNameInput.value;
    if(inputValue != ''){
        savelistBtn.setAttribute('data-dismiss', 'modal');
        // insert the value in the list container
        // listButton.setAttribute('type', 'button');
        var listButton = document.createElement('a');
        listButton.setAttribute('id', 'listBtn');
        listButton.setAttribute('data-toggle','modal');
        listButton.setAttribute('data-target', '#createItemModal');
        listButton.setAttribute('href', '../insideList.html');
        listButton.setAttribute('class', 'btn btn-success');
        listButton.setAttribute('style', 'margin:10px;');
        listContainer.appendChild(listButton);
        var listButtonText = document.createTextNode(inputValue);
        listButton.appendChild(listButtonText);

        // add the delete button
        let deleteListButton = document.createElement('button');
        deleteListButton.setAttribute('type', 'button');
        deleteListButton.setAttribute('id', 'deleteListBtn');
        deleteListButton.setAttribute('class', 'btn text-dark');
        deleteListButton.style.backgroundColor = "yellow";
        deleteListButton.style.width = '70px';
        deleteListButton.style.marginTop = '-49px';
        deleteListButton.style.marginLeft = '800px';
        // deleteListButton.textContent = 'Delete';
        let trashList = document.createElement('i');
        trashList.setAttribute('class', 'fa-solid fa-trash-can');
        deleteListButton.appendChild(trashList);
        listContainer.appendChild(deleteListButton);
        if(deleteListButton){
            deleteListButton.addEventListener('click', function(){
                // alert('Delete Done');
                // list should be deleted
                listButton.remove();
                deleteListButton.remove();
            
            });
        }

        listNameInput.value = ''; 
        return 1;
    } else {
        // stop the modal from closing and show an error message
        savelistBtn.removeAttribute('data-dismiss');
        errorMsg.style.display = 'inline-block';
        errorMsg.textContent = "No List Name Given!";
        return 0;
    }

});

// setting the page header
document.addEventListener('click', function(e){
    if(e.target.id == 'listBtn'){
        // take text content
        let textOfButton = e.target.text;
        // add the text to the header on the other page
        let textHolder = document.createTextNode("Your "+textOfButton+" list");
        // before appending the child, check if there's already another text appended there.
        if(listtitleName.textContent === ''){
            listtitleName.appendChild(textHolder);
        } else{
            return 0;
        }
        

    }
}); //logic to revisit later

// item creation
let itemData = document.getElementById('inputitemData');
let itemButton = document.getElementById('addItemBtn');
let errorMsgII = document.getElementById('errorMsg2');
let itemContainer = document.getElementById('itemContainer');

itemButton.addEventListener('click', function(){
    // alert('Hello');
    let itemDataValue = itemData.value;
    // take the input value
    if(itemDataValue != ''){
        
        var itemDataText = document.createTextNode(itemDataValue);
        // create a paragraph
        let itemP = document.createElement('p');
        itemP.setAttribute('class', 'item-p');
        itemP.setAttribute('id', 'itemP');
        itemP.appendChild(itemDataText);
        itemContainer.appendChild(itemP);
        
        
        // create a checkbox
        var checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', 'itemCheckbox');
        checkbox.setAttribute('class', 'checkboxItem');
        // checkbox.style.marginTop = '-2rem';
        checkbox.style.border = '2px solid red';
        itemContainer.appendChild(checkbox);
        
        checkbox.addEventListener('click', function(){
            if(checkbox.checked){
                // alert('checked');
                itemP.style.textDecoration = 'line-through';
                itemP.style.opacity = '0.5';
            } else if(checkbox.checked != 1){
                itemP.style.textDecoration = 'none'
                itemP.style.opacity = '1';
            }
        });
        
        
        // create delete item button
        let itemDeleteButton = document.createElement('button');
        itemDeleteButton.setAttribute('type', 'button');
        // itemDeleteButton.setAttribute('id', 'deleteListBtn');
        itemDeleteButton.setAttribute('class', 'btn itemDeleteBtn btn-danger text-light');
        // itemDeleteButton.textContent = 'Delete';
        let trashItem = document.createElement('i');
        trashItem.setAttribute('class', 'fa-solid fa-trash-can');
        itemDeleteButton.appendChild(trashItem);
        itemContainer.appendChild(itemDeleteButton);
        if(itemDeleteButton){
            itemDeleteButton.addEventListener('click', function(){
                itemDeleteButton.remove();
                checkbox.remove();
                itemP.remove();
            });
        }

        itemData.value = '';
    } else{
        errorMsgII.textContent = 'No Item Written';
        errorMsgII.style.display = 'inline-block';
    }
});

// apply web storage
function saveLocalList(list){
    
}












