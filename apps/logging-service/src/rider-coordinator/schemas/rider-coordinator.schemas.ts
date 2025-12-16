
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";

export type RiderCoordinatorDocument=HydratedDocument<RiderCoordinator>

@Schema()
export class RiderCoordinator{

    @Prop({required:true})
    lan:number

    @Prop()
    lat:number

    @Prop()
    ride:string


}

export const RiderCoordinatorSchema=SchemaFactory.createForClass(RiderCoordinator)