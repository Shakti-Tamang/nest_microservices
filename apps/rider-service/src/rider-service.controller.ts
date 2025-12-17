import { Controller, Get } from '@nestjs/common';
import { RiderServiceService } from './rider-service.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class RiderServiceController {
  constructor(private readonly riderServiceService: RiderServiceService) {}

  @Get()
  getHello(): string {
    return this.riderServiceService.getHello();
  }

  @MessagePattern({ cmd: 'get-rider' })
  // @Get()
 getRiderById(data: { id: string }) {
  return {
    _id: data.id,
    firstname: 'shakti',
    lastname: 'tamang',
    email: 'tamanshakti423@gmail.com',
  };
}

}
