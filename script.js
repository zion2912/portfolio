const projects = [
  {
    title: "Progressive Overload Journal",
    description: "A web app for tracking and monitoring workout progression over time. Log exercises, weights, and reps to visualize your fitness gains.",
    tags: ["Web App", "Fitness", " Data Tracking"],
    url: "https://myprogressiveoverloadjournal.com/"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio site to showcase modern web projects with clean layout and animation-ready styling.",
    tags: ["HTML", "CSS", "JavaScript"],
    url: "#"
  },
  {
    title: "Task Tracker",
    description: "A small productivity app for tracking daily work, managing tasks, and keeping progress visible.",
    tags: ["Web App", "UI", "Interaction"],
    url: "#"
  },
  {
    title: "Landing Page",
    description: "A minimal landing page design for product launches, highlighting messaging, features, and calls to action.",
    tags: ["Design", "Responsive", "Accessibility"],
    url: "#"
  }
];

const grid = document.getElementById("project-grid");

projects.forEach(project => {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="project-meta">
      <span>${project.tags.join(" · ")}</span>
      <a href="${project.url}" aria-label="View ${project.title}">View project</a>
    </div>
  `;
  grid.appendChild(card);
});
