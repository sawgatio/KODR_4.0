let comments = [];

function addComment() {
    const input = document.getElementById("commentInput");
    const text = input.value.trim();

    if (text === "") return;

    comments.push({
        id: Date.now(),
        text: text,
        replies: [],
        showReply: false
    });

    input.value = "";
    renderComments();
}

function renderComments() {
    const container = document.getElementById("comments");

    container.innerHTML = comments.map(comment => `
        <div class="comment">

            <p>${comment.text}</p>

            <button onclick="toggleReply(${comment.id})">
                Reply
            </button>

            ${
                comment.showReply
                ?
                `
                <div class="replyBox">
                    <input
                        id="reply-${comment.id}"
                        type="text"
                        placeholder="Write reply">
                    <button onclick="addReply(${comment.id})">
                        Submit
                    </button>
                </div>
                `
                :
                ""
            }

            ${comment.replies.map(reply => `
                <div class="reply">
                    ${reply.text}
                </div>
            `).join("")}

        </div>
    `).join("");
}

function toggleReply(id) {
    comments = comments.map(comment => {
        if (comment.id === id) {
            comment.showReply = !comment.showReply;
        }
        return comment;
    });

    renderComments();
}

function addReply(id) {

    const input = document.getElementById(`reply-${id}`);
    const text = input.value.trim();

    if (text === "") return;

    comments = comments.map(comment => {

        if (comment.id === id) {

            comment.replies.push({
                id: Date.now(),
                text: text
            });

            comment.showReply = false;
        }

        return comment;
    });

    renderComments();
}
