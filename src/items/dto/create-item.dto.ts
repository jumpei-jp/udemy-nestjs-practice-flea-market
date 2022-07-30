import { IsNotEmpty, IsString, MaxLength, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

// itemに対してvalidationをする
export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  name: string;

  @IsInt()
  @Min(1)
  @Type(() => Number)
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;
}
