import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinator, RiderCoordinatorDocument } from './schemas/rider-coordinator.schemas';
import { Model } from 'mongoose';
import { RiderCoordinatorDto } from './dto/rider-coordinator.dto';

@Injectable()
export class RiderCoordinatorService {

constructor(@InjectModel(RiderCoordinator.name) private readonly riderModel:Model<RiderCoordinatorDocument>){

}


async saveDetails(dto:RiderCoordinatorDto){

 const createdUser = new this.riderModel(dto);


 return createdUser.save();

}

}
