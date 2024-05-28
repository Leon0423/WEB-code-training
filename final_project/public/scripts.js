// scripts.js

const projects = [
	{
		id: 1,
		title: "程式 1",
		description: "這是程式 1 的描述。",
		code: 'console.log("Hello, world!");',
		tags: ["JavaScript", "入門"],
		category: "前端",
	},
	{
		id: 2,
		title: "程式 2",
		description: "這是程式 2 的描述。",
		code: 'console.log("Hello, world again!");',
		tags: ["JavaScript", "進階"],
		category: "前端",
	},
	{
		id: 3,
		title: "程式 3",
		description: "這是程式 3 的描述。",
		code: 'console.log("Hello, world once more!");',
		tags: ["Python", "入門"],
		category: "後端",
	},
	{
		id: 4,
		title: "程式 4",
		description: "這是程式 4 的描述。",
		code: 'console.log("This is program 4!");',
		tags: ["Python", "進階"],
		category: "後端",
	},
	{
		id: 5,
		title: "程式 5",
		description: "這是程式 5 的描述。",
		code: 'console.log("This is program 5!");',
		tags: ["JavaScript", "專案"],
		category: "全端",
	},
	{
		id: 6,
		title: "我的新程式",
		description: "這是我的新程式的描述。",
		code: `
            function myNewFunction() {
                console.log("這是我的新程式");
            }
            myNewFunction();
        `,
		tags: ["JavaScript", "自訂標籤"],
		category: "前端",
	},
];

function generateProjectList(category = "all") {
	const projectList = document.getElementById("project-list");
	projectList.innerHTML = "";

	const filteredProjects =
		category === "all" ? projects : projects.filter((project) => project.category === category);

	filteredProjects.forEach((project) => {
		const listItem = document.createElement("li");
		const projectLink = document.createElement("a");
		projectLink.href = `project.html?id=${project.id}`;
		projectLink.textContent = project.title;
		listItem.appendChild(projectLink);
		projectList.appendChild(listItem);
	});
}

function showTab(category) {
	const tabButtons = document.querySelectorAll(".tab-button");
	tabButtons.forEach((button) => {
		button.classList.remove("active");
	});

	const activeButton = document.querySelector(`.tab-button[onclick="showTab('${category}')"]`);
	activeButton.classList.add("active");

	generateProjectList(category);
}

function toggleTabs() {
	const tabs = document.getElementById("tabs");
	tabs.classList.toggle("hidden");
}

if (window.location.pathname.includes("projects.html")) {
	window.onload = () => {
		generateProjectList();
	};
}
