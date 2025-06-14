document.addEventListener("DOMContentLoaded", () => {
  const newsData = [
    {
      title: "UVCE to Be Developed on IIT Model",
      content: "The Karnataka government has approved ₹100 crore for UVCE to develop it on the lines of IITs, aiming to boost infrastructure and academic excellence."
    },
    {
      title: "Autonomous Status Granted",
      content: "UVCE has received full autonomy to enhance its academic structure and operate independently, aligning with premier institutes like IITs."
    },
    {
      title: "Relocation to Jnana Bharati Campus Proposed",
      content: "The government plans to relocate UVCE to a 50-acre plot at Bangalore University's Jnana Bharati campus, though some environmental concerns have been raised."
    },
    {
      title: "UVCE Achieves Record Placement",
      content: "In 2024, UVCE secured a highest placement package of ₹26.5 LPA, showcasing its growing reputation among top tech firms."
    }
  ];

  const newsSection = document.getElementById("news-section");

  newsData.forEach(item => {
    const card = document.createElement("div");
    card.className = "col-md-6 col-lg-4 mb-4";
    card.innerHTML = `
      <div class="card h-100 p-3">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.content}</p>
        </div>
      </div>
    `;
    newsSection.appendChild(card);
  });
});
