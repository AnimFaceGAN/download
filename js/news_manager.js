function openModal(obj) { 
    let modalBase = document.getElementById('modal-bg');
    let modalMain = document.getElementById('modal-main');
    modalBase.style.display = 'block';
    filePath = 'news/' + obj.dataset.articleId + '.html';
    $('#modal-desc').load(filePath);
}

function closeModal() {
    let modalBase = document.getElementById('modal-bg');
    modalBase.style.display = 'none';
}

function prohibitCloseModal() {
    event.stopPropagation();
}