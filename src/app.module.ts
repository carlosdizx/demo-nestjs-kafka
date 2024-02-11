import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import ProducerModule from './producer/producer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProducerModule,
  ],
})
export default class AppModule {}
