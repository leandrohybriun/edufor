import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class GetAllUsersDto {
  @Transform(({ value }) => Number(value))
  @IsOptional()
  take?: number;

  @Transform(({ value }) => Number(value))
  @IsOptional()
  skip?: number;

  @Transform(({ value }) => Number(value))
  @IsOptional()
  pv?: number;
}
