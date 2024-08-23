function expandButton(button, type) {
    // Verifica se il pulsante è già espanso, in tal caso non fare nulla
    if (button.classList.contains('expanded')) {
        return;
    }

    // Nascondi tutti gli altri pulsanti
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => {
        btn.style.display = btn === button ? 'block' : 'none';
    });

    // Aggiungi la classe `expanded` al pulsante cliccato e mostra il contenuto aggiuntivo
    button.classList.add('expanded');

    // Crea un div per contenere il contenuto espanso
    const contentDiv = document.createElement('div');
    contentDiv.innerHTML = getExpandedContent(type);
    contentDiv.classList.add('expanded-content'); // Aggiungiamo una classe per il CSS
    button.parentNode.insertBefore(contentDiv, button.nextSibling);
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
    // Ripristina la visualizzazione di tutti i pulsanti
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => {
        btn.style.display = 'block';
        btn.classList.remove('expanded');
    });

    // Rimuovi il contenuto espanso
    const expandedContent = document.querySelector('.expanded-content');
    if (expandedContent) {
        expandedContent.remove();
    }
}
