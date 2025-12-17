
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";

export type RiderCoordinatorDocument=HydratedDocument<Order>

@Schema()
export class Order{

    @Prop({required:true})
    lan:number

    @Prop()
    lat:number

    @Prop()
    ride:string


}

export const RiderCoordinatorSchema=SchemaFactory.createForClass(Order)