
import {  IsNotEmpty } from 'class-validator';
export class RiderCoordinatorDto{



   @IsNotEmpty()
    lan:number


    @IsNotEmpty()
    lat:number


    @IsNotEmpty()
    ride:string
}