import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  RiderCoordinator,
  RiderCoordinatorDocument,
} from './schemas/rider-coordinator.schemas';
import { Model } from 'mongoose';
import { RiderCoordinatorDto } from './dto/rider-coordinator.dto';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RiderCoordinatorService {
  constructor(
    @InjectModel(RiderCoordinator.name)
    private readonly riderModel: Model<RiderCoordinatorDocument>,
    @Inject('RIDER_SERVICE') private client: ClientProxy,
  ) {}

  async saveDetails(dto: RiderCoordinatorDto) {
    const createdUser = new this.riderModel(dto);

    return createdUser.save();
  }

  async getAll(riderId: string) {
    const data = await this.riderModel.find({ ride: riderId }).lean().exec();

    const pattern = { cmd: 'get-rider' };
    const payload = { id: riderId };

    const rider = await firstValueFrom(
      this.client.send<RiderResponse>(pattern, payload),
    );

    return {
      coordinatorData: data,
      rider,
      message: 'successfully fetched data',
    };
  }
}
