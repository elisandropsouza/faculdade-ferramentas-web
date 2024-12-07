const footerHTML = `
    <footer>
      <p>&copy; 2024 Elisandro. Todos os direitos reservados.</p>

    <section class="social-icons">
        <a href="https://www.instagram.com/jam_elisandrosouza" target="_blank" class="icon instagram"></a>
        <a href="https://www.linkedin.com/in/elisandro-souza-bb7425186" target="_blank" class="icon linkedin"></a>
    </section>

    </footer>
  `
function generateFooter() {
  document.getElementById('footer').innerHTML = footerHTML
}

// Chama a função quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', generateFooter)