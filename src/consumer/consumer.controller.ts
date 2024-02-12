import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Controller('consumer')
export default class ConsumerController {
  private readonly topic: string;
  constructor(private readonly configService: ConfigService) {
    this.topic = this.configService.getOrThrow('KAFKA_TOPIC_1');
  }

  @MessagePattern('YAPE_TRANSACTIONS')
  public catchMessage(@Payload() payload: any) {
    Logger.log(payload, ConsumerController.name);
  }
}
