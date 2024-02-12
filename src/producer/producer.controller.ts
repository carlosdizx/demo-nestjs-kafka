import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Controller('producer')
export default class ProducerController {
  private readonly topic: string;
  constructor(
    @Inject('KAFKA') private readonly kafka: ClientProxy,
    private readonly configService: ConfigService,
  ) {
    this.topic = this.configService.getOrThrow('KAFKA_TOPIC_1');
  }

  @Post('send')
  public sendMessage(
    @Body('message') message: string,
    @Body('user') user: string,
  ) {
    return this.kafka.emit(this.topic, { message, user });
  }
}
