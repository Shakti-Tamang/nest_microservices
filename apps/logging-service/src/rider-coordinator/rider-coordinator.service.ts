import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  RiderCoordinator,
  RiderCoordinatorDocument,
} from './schemas/rider-coordinator.schemas';
import { Model } from 'mongoose';

import { ClientProxy } from '@nestjs/microservices';
import { RiderCoordinatorDto } from './dto/rider-coordinator.dto';
import { OrderDto } from './dto/order-coordinator.dto';
import { ORDER_SERVICE_RABBITMQ } from './servicename/service-name';
import { Order, orderCoordinatorDocument } from './schemas/order-coordinator.schemas';

// import { firstValueFrom } from 'rxjs';

@Injectable()
export class RiderCoordinatorService {
  constructor(
    @InjectModel(RiderCoordinator.name)
    private readonly riderModel: Model<RiderCoordinatorDocument>,
       @InjectModel(Order.name)
    private readonly orderModel: Model<orderCoordinatorDocument>,
    @Inject(ORDER_SERVICE_RABBITMQ) private client: ClientProxy,
  ) {}

  async saveDetails(dto: RiderCoordinatorDto) {
    const createdUser = new this.riderModel(dto);

    return createdUser.save();
  }

  async saveOrder(dto: OrderDto) {
    this.client.emit('order-create', dto);;
    const createdUser = new this.orderModel(dto);
    return createdUser.save();
  }

  async getAll(riderId: string) {
    const data = await this.riderModel.find({ ride: riderId }).lean().exec();

    // const pattern = { cmd: 'get-rider' };
    // const payload = { id: riderId };

    // const rider = await firstValueFrom(
    //   this.client.send<RiderResponse>(pattern, payload),
    // );

    return {
      coordinatorData: data,
      message: 'successfully fetched data',
    };
  }
}
