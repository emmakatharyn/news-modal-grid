// Array of news articles
const articles = [
  {
    title: "Article 1",
    date: "June 4, 2023",
    description: "Description of article 1. Here are some more words n stuff to take up space hehe. Click link below.",
    url: "https://nmpsia.com/nmpsiadownload/202306/RAC_Meeting_Packet.pdf",
  },
  {
    title: "Article 2",
    date: "June 4, 2023",
    description: "Description of article 2. Here are some more words n stuff to take up space hehe. Click link below.",
    url: "https://example.com/news1",
  },
  {
    title: "Article 3",
    date: "June 4, 2023",
    description: "Description of article 3. Here are some more words n stuff to take up space hehe. Click link below.",
    url: "https://example.com/news1",
  },
  {
    title: "Article 4",
    date: "June 5, 2023",
    description: "Description of article 4. Here are some more words n stuff to take up space hehe. Click link below.",
    url: "https://example.com/news1",
  },
  // Add more articles as needed
];

// Function to create and populate the news grid
function createNewsGrid() {
  const gridContainer = document.getElementById("newsGrid");

  articles.forEach((article, index) => {
    const articleElement = document.createElement("div");
    articleElement.classList.add("article");
    articleElement.innerHTML = `
    <span class="article-date">${article.date}</span>
      <h3>${article.title}</h3>
      <p>${article.description}</p>
    `;

    articleElement.addEventListener("click", () => {
      showModal(article);
    });

    gridContainer.appendChild(articleElement);
  });
}

// Function to show the modal with article details
function showModal(article) {
  const modal = document.getElementById("modal");
  const modalDate = document.getElementById("modal-date");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalLink = document.getElementById("modal-link");

  modalDate.textContent = article.date;
  modalTitle.textContent = article.title;
  modalDescription.textContent = article.description;
  modalLink.textContent = article.url;
  modal.style.display = "block";

  const closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

// Initialize the news grid
createNewsGrid();
