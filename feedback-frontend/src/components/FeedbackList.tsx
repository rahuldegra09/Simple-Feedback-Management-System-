import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Feedback {
    name: string;
    feedback: string;
}

const FeedbackList: React.FC = () => {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        fetchMoreData();
    }, []);

    const fetchMoreData = async () => {
        const response = await axios.get('http://localhost:3000/feedback');
        setFeedbacks(response.data);
        setHasMore(false); // Update this based on actual data availability
    };

    return (
        <InfiniteScroll
            dataLength={feedbacks.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
        >
            <ul>
                {feedbacks.map((fb, index) => (
                    <li key={index}>
                        <strong>{fb.name}</strong>: {fb.feedback}
                    </li>
                ))}
            </ul>
        </InfiniteScroll>
    );
};

export default FeedbackList;
