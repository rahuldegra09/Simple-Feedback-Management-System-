self.onmessage = async function () {
    const response = await fetch('http://localhost:3000/feedback');
    const feedbacks = await response.json();
    postMessage(feedbacks);
};
