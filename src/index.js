//vars...
const { hamburger, hamburgerMenu, formContactUs } = {
	hamburger: document.querySelector("#hamburger"),
	hamburgerMenu: document.querySelector("#hamburgerMenu"),
	formContactUs: document.querySelector("#formContactUs")
}

//using Hamburger
hamburger.addEventListener("click", (e) => {
	hamburgerMenu.classList.toggle("hidden");
});

hamburgerMenu.addEventListener("click", () => {
	hamburgerMenu.classList.add("hidden")
})

// validate the form
formContactUs.addEventListener("submit", (e) => {

	e.preventDefault()

		const { name, email, desc, isOrder } = { 
			name: e.target[0].value,
			email: e.target[1].value,
			desc: e.target[2].value
		}

		if(name !== "" && name !== null){
			if(email !== "" && email !== null){
				if(desc !== "" && desc !== null){
					formContactUs.submit()
				} else {
					Swal.fire({
						title: "Wait",
						text: "There are inputs empty, try again and fill it",
						icon: "error"
					})
				}
			} else {
				Swal.fire({
					title: "Wait",
					text: "There are inputs empty, try again and fill it",
					icon: "error"
				})
			}
		} else {
			Swal.fire({
				title: "Wait",
				text: "There are inputs empty, try again and fill it",
				icon: "error"
			})
		}

})