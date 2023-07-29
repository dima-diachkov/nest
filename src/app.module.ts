import { Module } from '@nestjs/common';
import { NoteController } from './app.controller';
import { NoteService } from './app.service';
import { NestFactory } from '@nestjs/core';

@Module({
  controllers: [NoteController],
  providers: [NoteService],
})
export class AppModule {}

// ... (rest of the code remains the same)

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set up any additional middleware or configurations here.
  // For example, if you want to enable CORS, you can use the following line:
  // app.enableCors();

  await app.listen(3001);
}
bootstrap();
