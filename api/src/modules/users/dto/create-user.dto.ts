import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Nome é obrigatório!' })
  name: string;

  @IsEmail({}, { message: 'Email inválido!' })
  email: string;

  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    {
      message:
        'Senha deve conter pelo menos 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número e 1 símbolo!',
    },
  )
  password: string;

  @IsPhoneNumber('BR', {
    message: 'Telefone inválido! Use um número válido com DDD.',
  })
  phone: string;

  @IsNumber({}, { message: 'O campo "pv" deve ser um número válido!' })
  pv: number;
}
