import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginPayloadDto {
  @IsEmail({}, { message: 'E-mail deve ser válido!' })
  @IsNotEmpty({ message: 'E-mail obrigatório!' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Senha obrigatória!' })
  password: string;
}
