// selectează meniul principal
const mainMenu = document.querySelector('nav ul');

// selectează toate secțiunile principale
const sections = document.querySelectorAll('main section');

// ascunde toate secțiunile principale
sections.forEach(section => section.style.display = 'none');

// afișează secțiunea selectată și actualizează meniul activ
function showSection(sectionId) {
	sections.forEach(section => {
		if (section.id === sectionId) {
			section.style.display = 'block';
		} else {
			section.style.display = 'none';
		}
	});

	// actualizează meniul activ
	const activeLink = mainMenu.querySelector(`[href="#${sectionId}"]`);
	mainMenu.querySelectorAll('a').forEach(link => link.classList.remove('active'));
	activeLink.classList.add('active');
}

// afișează prima secțiune la încărcarea paginii
showSection('nutritie');

// adaugă evenimente click pentru fiecare link din meniu
mainMenu.querySelectorAll('a').forEach(link => {
	link.addEventListener('click', e => {
		e.preventDefault();
		showSection(link.getAttribute('href').slice(1));
	});
});
