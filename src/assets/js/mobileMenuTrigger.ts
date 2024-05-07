
	const mobileMenuTrigger: HTMLElement | null = document.querySelector(".mobile__menu--trigger");

	const mobileMenu: HTMLElement | null = document.querySelector(".mobile__menu");

	mobileMenuTrigger?.addEventListener("click", () => {
		mobileMenu?.classList.toggle("active");

		if (mobileMenu?.classList.contains("active")) {
			mobileMenu.style.display = "block";
		} else {
			mobileMenu.style.display = "none";
		}
	});
