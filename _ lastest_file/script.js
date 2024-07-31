<script>
	function toggleDarkMode() {document.body.classList.toggle("dark-mode")}
	document.querySelectorAll('.copy-button').forEach(button ={" "}
	{button.addEventListener("click", () => {
		const codeBlock = button.previousElementSibling.querySelector("code");
		const codeText = codeBlock.innerText;

		navigator.clipboard
			.writeText(codeText)
			.then(() => {
				button.classList.add("copy-success");
				button.innerHTML = "已複製";
				setTimeout(() => {
					button.classList.remove("copy-success");
					button.innerHTML = '<i class="fa fa-copy"></i>';
				}, 2000);
			})
			.catch((err) => {
				console.error("Failed to copy: ", err);
			});
	})}
	);
</script>;
