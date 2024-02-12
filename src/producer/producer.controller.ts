import { Body, Controller, Inject, Logger, Post } from '@nestjs/common';
import ProducerService from './producer.service';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';

const TOPIC = 'YAPE_TRANSACTIONS';

@Controller('producer')
export default class ProducerController {
  constructor(
    private readonly producerService: ProducerService,
    @Inject('KAFKA') private readonly kafka: ClientProxy,
  ) {}

  @MessagePattern(`${TOPIC}`)
  public catchMessage(@Payload() payload: any) {
    Logger.log(payload, ProducerController.name);
  }

  @Post('send')
  public sendMessage(
    @Body('message') message: string,
    @Body('user') user: string,
  ) {
    Logger.log(TOPIC, '<====');
    return this.kafka.emit(TOPIC, { message, user });
  }
}
