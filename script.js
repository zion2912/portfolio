const projects = [
  {
    title: "Progressive Overload Journal",
    description: "A web app for tracking and monitoring workout progression over time. Log exercises, weights, and reps to visualize your fitness gains.",
    tags: ["Web App", "Fitness", " Data Tracking"],
    url: "https://myprogressiveoverloadjournal.com/",
    images: [
      "images/processed-2533DF4C-EF79-4196-A91F-0C135B3DE286.jpeg",
      "images/processed-4FC2EB13-56F3-4743-A4C3-E08075026722.jpeg",
      "images/processed-7AEA4EFC-3DD3-4693-BCF0-9A02BDA0519B.jpeg",
      "images/processed-7E5E0311-C016-4AAA-AB05-44F1BDEEEFC7.jpeg"
    ]
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
  
  let imagesHtml = '';
  if (project.images && project.images.length > 0) {
    imagesHtml = `
      <div class="card-gallery">
        ${project.images.map(img => `<img src="${img}" alt="${project.title}" class="card-image" />`).join('')}
      </div>
    `;
  }
  
  card.innerHTML = `
    ${imagesHtml}
    <div class="card-content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-meta">
        <span>${project.tags.join(" · ")}</span>
        <a href="${project.url}" aria-label="View ${project.title}">View project</a>
      </div>
    </div>
  `;
  grid.appendChild(card);
});
