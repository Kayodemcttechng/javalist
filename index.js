function addListItem() {
    const ul = document.getElementById('itemList');
    const li = document.createElement('li');
    li.textContent = 'New Item';
    ul.appendChild(li);
}

const button = document.querySelector('button');
button.addEventListener('click', addListItem);