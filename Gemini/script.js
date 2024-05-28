const nav = document.querySelector("nav");
const sections = document.querySelectorAll("section");

nav.addEventListener("click", (event) => {
	const target = event.target;
	if (target.tagName === "A" && target.href.startsWith("#")) {
		const id = target.getAttribute("href");
		const section = document.querySelector(id);
		if (section) {
			event.preventDefault();
			window.scrollTo({
				top: section.offsetTop,
				behavior: "smooth",
			});
		}
	}
});

window.addEventListener("scroll", () => {
	const activeSection = sections.find((section) => {
		return (
			window.pageYOffset >= section.offsetTop - nav.offsetHeight &&
			window.pageYOffset < section.offsetTop + section.offsetHeight
		);
	});

	if (activeSection) {
		nav.querySelectorAll('a[href^="#"]').forEach((link) => {
			link.classList.remove("active");
		});

		const activeLink = nav.querySelector(`a[href="#${activeSection.id}"]`);
		if (activeLink) {
			activeLink.classList.add("active");
		}
	}
});
