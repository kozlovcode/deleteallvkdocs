var delete_docs = setInterval(function() {
document.querySelector('.docs_delete_row').click()
var item = document.querySelector('.docs_item_deleted');
item.parentNode.removeChild(item);
}, 100);
