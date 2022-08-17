import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('/createuser')
  async create(@Body() createUserDTO: CreateUserDTO): Promise<void> {
    const user = await this.usuarioService.create(createUserDTO);

    return user;
  }

  @Get('/listall')
  async hello(): Promise<User[]> {
    return await this.usuarioService.findAll();
  }
}
