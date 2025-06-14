document.addEventListener('DOMContentLoaded', () => {
    const discussionForm = document.getElementById('discussion-form');
    const discussionInput = document.getElementById('discussion-input');
    const discussionList = document.getElementById('discussion-list');

    // Load saved discussions from localStorage
    const savedDiscussions = JSON.parse(localStorage.getItem('discussions')) || [];

    // Function to save discussions to localStorage
    function saveDiscussions() {
        const topics = [];
        discussionList.querySelectorAll('li').forEach(li => {
            // Remove the 'Remove' button text from the li textContent
            const text = li.firstChild.textContent || li.textContent;
            topics.push(text.trim());
        });
        localStorage.setItem('discussions', JSON.stringify(topics));
    }

    // Function to create a new discussion list item
    function createDiscussionItem(text) {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = text;

        // Add a remove button for each item
        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn btn-sm btn-danger';
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            discussionList.removeChild(li);
            saveDiscussions();
        });

        li.appendChild(removeBtn);
        return li;
    }

    // Render saved discussions on page load
    savedDiscussions.forEach(topic => {
        const item = createDiscussionItem(topic);
        discussionList.appendChild(item);
    });

    // Handle form submission to add new discussion topic
    discussionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTopic = discussionInput.value.trim();
        if (newTopic) {
            const newItem = createDiscussionItem(newTopic);
            discussionList.appendChild(newItem);
            discussionInput.value = '';
            saveDiscussions();
        }
    });
});
