import { Controller, Get } from '@nestjs/common';

@Controller('rider-coordinator')
export class RiderCoordinatorController {
  @Get()
  getUser(): string {
    return 'success';
  }
}
