     function adicionarImagem() {
            // Criar um elemento <img>
            const img = document.createElement("img");
            // Definir o atributo src da imagem
            img.src = "/idade/assets/img/bebe.jpg"; // Substitua pelo URL da sua imagem
            // Adicionar uma descrição alternativa
            img.alt = "Imagem gerada via JavaScript";
            // Definir estilos opcionais
            img.style.width = "100px";
            img.style.height = "100px";
            img.style.alignContent="center";

            // Selecionar o contêiner onde a imagem será inserida
            const container = document.getElementById("imagem-container");
            // Adicionar a imagem ao contêiner
            container.appendChild(img);
        }