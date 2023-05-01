'use strict'

{
	/** @type {NodeListOf<HTMLButtonElement} */
	const buttons = document.querySelectorAll("[data-set-font-size]")

	for (const button of buttons) {
		button.onclick = () => {
			document.querySelector('.tokyo-welcome').dataset.fontSize = button.dataset.setFontSize
		}
	}
}