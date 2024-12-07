const menuHTML = `<nav>
                        <ul>
                            <li><a href="index.html">Sobre mim</a></li>
                            <li><a href="formacao.html">Formação</a></li>
                            <li><a href="portifolio.html">Portifólio</a></li>
                            <li><a href="contato.html">Contato</a></li>
                        </ul>
                    </nav>`

function generateMenu() {
    // Imprimir o conteudo na tag com id = menu
    document.getElementById('menu').innerHTML = menuHTML
}

// Chama a função quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', generateMenu)