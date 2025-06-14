document.addEventListener("DOMContentLoaded", () => {
const newsData = [
    {
        title: "IEE Technical Club",
        content: "A club that promotes innovation and learning in electronics, electrical, and related technologies. It helps students grow through workshops, projects, and tech events."
    },
    {
        title: "Paradox",
        content: "A place where students come together to enjoy music, play instruments, and perform. It's all about having fun, expressing yourself, and sharing the love for music."
    },
    {
        title: "Tatva",
        content: "A club where students explore acting, drama, and stage performances. It's all about expressing emotions, telling stories, and building confidence through theatre."
    },
    {
        title: "G2C2",
        content: "A club focused on protecting nature and spreading awareness about the environment. Members take part in green activities like planting trees, clean-up drives, and eco-friendly projects."
    },
    {
        title: "Momento",
        content: "A club where students express themselves through dance and rhythm. It’s all about learning, performing, and enjoying different styles of dance together."
    },
    {
        title: "ECell",
        content: "A club that encourages students to think creatively and build their own startups. It helps develop business ideas, leadership skills, and an entrepreneurial mindset."
    },
    {
        title: "Prathibimba",
        content: "A creative space where students explore drawing, painting, and all forms of visual art. It’s all about expressing ideas, emotions, and imagination through art."
    },
    {
        title: "ಚೇತನ",
        content: "ಕನ್ನಡ ಭಾಷೆ, ಸಂಸ್ಕೃತಿ ಮತ್ತು ಪರಂಪರೆಯ ಮಹತ್ವವನ್ನು ಆಚರಿಸುವ ಕ್ಲಬ್. ಕನ್ನಡ ಸಾಹಿತ್ಯ, ಸಂಗೀತ, ನಾಟಕ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳ ಮೂಲಕ ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಒಂದುಗೂಡಿಸುತ್ತದೆ."
    },
    {
        title: "E-Sports",
        content: "A club for students who are passionate about competitive video gaming. It encourages teamwork, strategy, and fun through tournaments and gaming events."
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
