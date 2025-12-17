import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  RiderCoordinator,
  RiderCoordinatorDocument,
} from './schemas/rider-coordinator.schemas';
import { Model } from 'mongoose';
import { RiderCoordinatorDto } from './dto/rider-coordinator.dto';
import { ClientProxy } from '@nestjs/microservices';

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

  async getAll() {
    const data = await this.riderModel.find().exec();

    // communicate with rider microservices by using rider id

    // communication can by happened by TCP,RabitMQ,Kafka,Nats

    // use of messge broker

    return {
      userData: data,

      message: 'successfully fetched data',
    };
  }
}
