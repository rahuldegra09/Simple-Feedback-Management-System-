import { Injectable } from '@nestjs/common';

export interface Feedback {
    name: string;
    feedback: string;
}

@Injectable()
export class FeedbackService {
    private feedbacks: Feedback[] = [];

    getAllFeedbacks(): Feedback[] {
        return this.feedbacks;
    }

    addFeedback(feedback: Feedback) {
        this.feedbacks.push(feedback);
    }
}
