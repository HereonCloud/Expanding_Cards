const panels = document.querySelectorAll('.panel') //puts all panel to array

panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		removeActiveClasses()
		panel.classList.add('active') // adds active class
	})
})

function removeActiveClasses() {
	panels.forEach((panel) => {
		panel.classList.remove('active') // removes active class
	})
}
