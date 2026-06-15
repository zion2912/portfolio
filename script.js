const projects = [
  {
    title: "Progressive Overload Journal",
    description: "A web app for tracking and monitoring workout progression over time. Log exercises, weights, and reps to visualize your fitness gains.",
    tags: ["JavaScript", "CSS", "Data Tracking","Data Storage"],
    url: "https://myprogressiveoverloadjournal.com/",
    images: [
      "images/processed-2533DF4C-EF79-4196-A91F-0C135B3DE286.jpeg",
      "images/processed-4FC2EB13-56F3-4743-A4C3-E08075026722.jpeg",
      "images/processed-7AEA4EFC-3DD3-4693-BCF0-9A02BDA0519B.jpeg",
      "images/processed-7E5E0311-C016-4AAA-AB05-44F1BDEEEFC7.jpeg"
    ]
  },
  {
    title: "Responsive Dashboards",
    description: "Take a look at some of the responsive dashboards I created since learning how to use tableau at my summer internship in 2024",
    tags: ["Analysis", "Visualizations", "Insights","Data Storytelling"],
    url: "https://public.tableau.com/app/profile/zion.nicholls/vizzes",
    images: [
      "images/Screenshot 2026-06-11 145700.png",
      "images/Screenshot 2026-06-11 150630.png"
    ]
  },
  {
    title: "Exam Performance Predictor",
    description: "A machine learning model that predicts student performance on exams based on study habits, attendance, and past grades. My first attempt at machine learning, built using pandas and scikit-learn. The dataset and files can be found on my github page, in the repository named 'Exam-Performance-Predictor'.",
    tags: ["Machine Learning", "Data Science", "Predictive Modeling"],
    url: ["https://exam-performance-predictor-edc24iddvqssjdsbcdlivc.streamlit.app/"],
    images: [
    "images/Screenshot 2026-06-15 140407.png",
    "images/Screenshot 2026-06-15 140431.png"
    ]
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
        ${project.images.map((img, idx) => `<img src="${img}" alt="${project.title}" class="card-image" data-img-index="${idx}" style="cursor: pointer;" />`).join('')}
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
        <div class="project-links">
          ${Array.isArray(project.url) ? project.url.map((url) => `<a href="${url}" aria-label="View ${project.title}" target="_blank">View project</a>`).join('') : `<a href="${project.url}" aria-label="View ${project.title}" target="_blank">View project</a>`}
        </div>
      </div>
    </div>
  `;
  grid.appendChild(card);
  
  // Add click handlers to images for lightbox
  if (project.images && project.images.length > 0) {
    card.querySelectorAll('.card-image').forEach(img => {
      img.addEventListener('click', () => {
        const imgIdx = parseInt(img.getAttribute('data-img-index'));
        openLightbox(project.images, imgIdx);
      });
    });
  }
});

// Lightbox functionality
let currentLightboxImages = [];
let currentImageIndex = 0;

function openLightbox(images, index) {
  currentLightboxImages = images;
  currentImageIndex = index;
  
  let lightbox = document.getElementById('lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
        <button class="lightbox-prev" aria-label="Previous image">❮</button>
        <img id="lightbox-image" src="" alt="Gallery image" class="lightbox-image" />
        <button class="lightbox-next" aria-label="Next image">❯</button>
        <div class="lightbox-counter"><span id="lightbox-counter"></span></div>
      </div>
    `;
    document.body.appendChild(lightbox);
    
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-prev').addEventListener('click', prevImage);
    lightbox.querySelector('.lightbox-next').addEventListener('click', nextImage);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    
    document.addEventListener('keydown', (e) => {
      if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
      }
    });
  }
  
  updateLightboxImage();
  lightbox.classList.add('active');
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
  }
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % currentLightboxImages.length;
  updateLightboxImage();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
  updateLightboxImage();
}

function updateLightboxImage() {
  const lightboxImg = document.getElementById('lightbox-image');
  const counter = document.getElementById('lightbox-counter');
  if (lightboxImg) {
    lightboxImg.src = currentLightboxImages[currentImageIndex];
    counter.textContent = `${currentImageIndex + 1} / ${currentLightboxImages.length}`;
  }
}
