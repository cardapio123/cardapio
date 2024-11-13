function showCategory(categoryId) {
    const menuList = document.getElementById('menuList');
    const categories = ['salgados', 'gelados', 'bebidas'];

    // Remove a classe "show" (para resetar animação)
    document.querySelectorAll('.menu-category').forEach(category => {
        category.classList.remove('show');
    });

    // Lógica para reorganizar a ordem das categorias
    let reorderedCategories;
    
    if (categoryId === 'gelados') {
        // Quando clicar em "gelados", coloca "bebidas" logo após
        reorderedCategories = ['gelados', 'bebidas', 'salgados'];
    } else {
        // Caso contrário, mantém a ordem original
        reorderedCategories = categories;
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
    });
});
