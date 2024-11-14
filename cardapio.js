function showCategory(categoryId) {
    const menuList = document.getElementById('menuList');
    const categories = ['salgados', 'bebidas', 'doces'];

    // Remove a classe "show" (para resetar animação)
    document.querySelectorAll('.menu-category').forEach(category => {
        category.classList.remove('show');
    });

    // Lógica para reorganizar a ordem das categorias com base no clique
    let reorderedCategories;

    if (categoryId === 'bebidas') {
        // Quando clica em "bebidas", a ordem é: Bebidas, Salgados, Doces
        reorderedCategories = ['bebidas', 'salgados', 'doces'];
    } else if (categoryId === 'salgados') {
        // Quando clica em "salgados", a ordem é: Salgados, Bebidas, Doces
        reorderedCategories = ['salgados', 'bebidas', 'doces'];
    } else if (categoryId === 'doces') {
        // Quando clica em "doces", a ordem é: Doces, Salgados, Bebidas
        reorderedCategories = ['doces', 'salgados', 'bebidas'];
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
