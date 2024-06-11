import { Module } from '@nestjs/common';
import { ThrottlerModule, ThrottlerModuleOptions, ThrottlerOptions } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedbackModule } from './feedback/feedback.module';

type MyThrottlerOptions = ThrottlerModuleOptions & {
  limit: number;
  ttl: number;
};

const throttlerOptions: MyThrottlerOptions = {
  limit: 1,
  ttl: 10,
  storage: null, // You need to define all required properties of ThrottlerModuleOptions
  throttlers: [], // Add an empty array for throttlers
};

@Module({
  imports: [
    ThrottlerModule.forRoot(throttlerOptions),
    FeedbackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
