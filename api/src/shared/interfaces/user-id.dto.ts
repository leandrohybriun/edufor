import { Transform } from 'class-transformer';
import { IsNotEmpty, IsInt } from 'class-validator';

export class UserIdDto {
  @Transform(({ value }) => Number(value))
  @IsNotEmpty({ message: 'ID obrigatório' }) 
  @IsInt({ message: 'ID deve ser um número inteiro' })
  id: number;
}
