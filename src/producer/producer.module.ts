import { Module } from '@nestjs/common';
import ProducerService from './producer.service';
import ProducerController from './producer.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'billing',
            brokers: ['localhost:9092'],
          },
          producer: {
            createPartitioner: Partitioners.DefaultPartitioner,
          },
        },
      },
    ]),
  ],
  controllers: [ProducerController],
  providers: [ProducerService],
})
export default class ProducerModule {}
