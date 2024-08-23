function expandButton(button, type) {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => {
        btn.style.display = btn === button ? 'block' : 'none';
    });

    // Aggiungi la classe `expanded` e modifica il contenuto del pulsante cliccato
    button.classList.add('expanded');
    button.innerHTML = getExpandedContent(type);
}

function getExpandedContent(type) {
    // Ritorna l'HTML con il pulsante per tornare indietro
    let content = '<div class="back-arrow" onclick="resetButtons()">↩ Indietro</div>';
    if (type === 'migliorie') {
        content += '<ul><li>Senza gusci</li><li>Cucina pulita</li><li>Cose ancora più buone</li></ul>';
    } else if (type === 'co-chef') {
        content += '<ul><li>Zoe</li><li>Adulto a caso se olio fa splash</li></ul>';
    } else if (type === 'preferiti') {
        content += '<p>Verranno riportati i vostri preferiti:</p><ul><li>Doriaky</li><li>Pizza rolls</li></ul>';
    }
    return content;
}

function resetButtons() {
    const buttons = document.querySelectorAll('.button');

    // Ripristina la visualizzazione di tutti i pulsanti
    buttons.forEach(btn => {
        btn.style.display = 'block';
        btn.classList.remove('expanded');
        btn.innerHTML = btn.textContent.split(' ')[0]; // Ripristina il testo originale del pulsante
    });
}
