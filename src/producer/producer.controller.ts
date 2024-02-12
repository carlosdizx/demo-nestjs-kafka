import { Controller, Logger } from '@nestjs/common';
import ProducerService from './producer.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('producer')
export default class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @MessagePattern('YAPE_TRANSACTIONS')
  public catchMessage(@Payload() payload: any) {
    Logger.log(payload, ProducerController.name);
  }
}
