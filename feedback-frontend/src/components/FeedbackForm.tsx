import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FeedbackForm.css'; // Import the CSS file

interface Feedback {
    id: number;
    name: string;
    feedback: string;
}

const FeedbackForm: React.FC = () => {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');
    const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);

    useEffect(() => {
        fetchFeedbacks();
    }, []);

    const fetchFeedbacks = async () => {
        try {
            const response = await axios.get('http://localhost:3000/feedback');
            setFeedbackList(response.data);
        } catch (error) {
            console.error('Error fetching feedbacks:', error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/feedback', { name, feedback });
            setName('');
            setFeedback('');
            fetchFeedbacks(); // Fetch the updated feedback list
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Feedback:</label>
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit Feedback</button>
            </form>
            <h2>Feedback List</h2>
            <ul>
                {feedbackList.map((entry) => (
                    <li key={entry.id}>
                        <strong>{entry.name}</strong>: {entry.feedback}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeedbackForm;
