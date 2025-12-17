import { IsNotEmpty } from 'class-validator';
export class OrderDto {
  @IsNotEmpty()
  lan: number;

  @IsNotEmpty()
  lat: number;

  @IsNotEmpty()
  ride: string;
}
