import { IsEmail, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  id: string;

  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
