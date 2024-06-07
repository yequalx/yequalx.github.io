const gridItems = document.querySelectorAll('.grid-item');

let draggedItem = null;

gridItems.forEach(item => {
    item.addEventListener('dragstart', () => {
        draggedItem = item;
        setTimeout(() => {
            item.style.display = 'none';
        }, 0);
    });

    item.addEventListener('dragend', () => {
        setTimeout(() => {
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0);
    });

    item.addEventListener('dragover', e => {
        e.preventDefault();
    });

    item.addEventListener('dragenter', e => {
        e.preventDefault();
        item.style.border = '2px dashed #aaa';
    });

    item.addEventListener('dragleave', () => {
        item.style.border = '1px solid #ccc';
    });

    item.addEventListener('drop', () => {
        item.style.border = '1px solid #ccc';
        if (item !== draggedItem) {
            let temp = item.innerHTML;
            item.innerHTML = draggedItem.innerHTML;
            draggedItem.innerHTML = temp;
        }
    });
});
