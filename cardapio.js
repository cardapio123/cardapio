function showCategory(categoryId) {
    const menuList = document.getElementById('menuList');
    const categories = ['salgados', 'gelados', 'bebidas'];

    // Remove a classe "show" (para resetar animação)
    document.querySelectorAll('.menu-category').forEach(category => {
        category.classList.remove('show');
    });

    // Definir a nova ordem conforme a categoria selecionada
    let reorderedCategories;
    if (categoryId === 'gelados') {
        reorderedCategories = ['gelados', 'bebidas', 'salgados'];
    } else if (categoryId === 'bebidas') {
        reorderedCategories = ['bebidas', 'salgados', 'gelados'];
    } else if (categoryId === 'salgados') {
        reorderedCategories = ['salgados', 'gelados', 'bebidas'];
    } else {
        reorderedCategories = categories; // Ordem original se nada for clicado
    }

    // Reorganiza a ordem no DOM com animação
    reorderedCategories.forEach((category, index) => {
        const categoryElement = document.getElementById(category);
        menuList.appendChild(categoryElement);
        
        // Adiciona a classe "show" para aplicar a animação somente ao clicar
        setTimeout(() => {
            categoryElement.classList.add('show');
        }, 100 * index); // Atraso para efeito gradual
    });
}

// Evento de clique para mostrar/ocultar descrições
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        console.log('Item clicado:', item); // Log para verificar clique
    });
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM totalmente carregado e analisado');
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
            console.log('Item clicado:', item);
        });
    });
});
