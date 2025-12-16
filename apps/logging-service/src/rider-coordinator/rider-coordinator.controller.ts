import { Body, Controller, Get, Post } from '@nestjs/common';
import { RiderCoordinatorDto } from './dto/rider-coordinator.dto';
import { RiderCoordinatorService } from './rider-coordinator.service';

@Controller('rider-coordinator')
export class RiderCoordinatorController {
  constructor(private readonly riderCoordinatorService:RiderCoordinatorService) {}

  @Get()
  getUser(): string {
    return 'success';
  }
  @Post()
  async saveRiders(@Body() dto: RiderCoordinatorDto) {
    return await this.riderCoordinatorService.saveDetails(dto);
  }
}
