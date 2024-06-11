import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { FeedbackService, Feedback } from './feedback.service';
import { CreateFeedbackDto } from './dto/feedback.dto';

@UseGuards(ThrottlerGuard)
@Controller('feedback')
export class FeedbackController {
    constructor(private readonly feedbackService: FeedbackService) { }

    @Get()
    getAllFeedbacks(): Feedback[] {
        return this.feedbackService.getAllFeedbacks();
    }

    @Post()
    addFeedback(@Body() createFeedbackDto: CreateFeedbackDto) {
        this.feedbackService.addFeedback(createFeedbackDto);
        return 'Feedback submitted';
    }
}
