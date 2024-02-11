import { Controller } from '@nestjs/common';
import ProducerService from './producer.service';

@Controller('producer')
export default class ProducerController {
  constructor(private readonly producerService: ProducerService) {}
}
