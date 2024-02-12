import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import ConsumerModule from './consumer/consumer.module';
import ProducerModule from './producer/producer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProducerModule,
    ConsumerModule,
  ],
})
export default class AppModule {}
