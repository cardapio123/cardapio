        function showCategory(categoryId) {
            const menuList = document.getElementById('menuList');
            const categories = ['salgados', 'gelados', 'bebidas'];

            // Remove a classe "show" (para resetar animação)
            document.querySelectorAll('.menu-category').forEach(category => {
                category.classList.remove('show');
            });

            // Remove a categoria selecionada do array
            const selectedCategoryIndex = categories.indexOf(categoryId);
            const reorderedCategories = categories.splice(selectedCategoryIndex, 1);

            // Coloca a categoria selecionada no início e reordena as outras
            categories.forEach(category => {
                reorderedCategories.push(category);
            });

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
