
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";

export type orderCoordinatorDocument=HydratedDocument<Order>

@Schema()
export class Order{

    @Prop({required:true})
    lan:number

    @Prop()
    lat:number

    @Prop()
    ride:string


}

export const orderCoordinatorSchema=SchemaFactory.createForClass(Order)