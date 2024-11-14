    function showCategory(categoryId) {
        const menuList = document.getElementById('menuList');
        const categories = ['salgados', 'gelados', 'bebidas'];
        const reorderedCategories = [];

        // Definir a ordem das categorias conforme o clique
        if (categoryId === 'bebidas') {
            reorderedCategories.push('bebidas', 'salgados', 'gelados');
        } else if (categoryId === 'salgados') {
            reorderedCategories.push('salgados', 'bebidas', 'gelados');
        } else {
            reorderedCategories.push('gelados', 'bebidas', 'salgados');
        }

        // Aplicar a animação de saída em todas as categorias
        categories.forEach(cat => {
            const element = document.getElementById(cat);
            element.classList.remove('show');
            element.style.opacity = '0';
            element.style.transform = 'translateY(-20px)';
        });

        // Esperar a animação de saída e reorganizar a ordem dos elementos
        setTimeout(() => {
            reorderedCategories.forEach((cat, index) => {
                const categoryElement = document.getElementById(cat);
                menuList.appendChild(categoryElement);

                // Aplica a animação de entrada gradualmente
                setTimeout(() => {
                    categoryElement.classList.add('show');
                    categoryElement.style.opacity = '1';
                    categoryElement.style.transform = 'translateY(0)';
                }, 100 * index); // Atraso para efeito gradual
            });
        }, 50); // Tempo da animação de saída
    }

    // Evento de clique para mostrar/ocultar descrições
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
