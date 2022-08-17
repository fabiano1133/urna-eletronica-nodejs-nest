import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findOneBy({
      email: createUserDto.email,
    });

    if (userAlreadyExists) {
      throw new InternalServerErrorException(
        `Esse email já existe em nossa base de dados`,
      );
    }

    const passwordHash = await bcrypt.hash(createUserDto.password, 8);

    const user = await this.userRepository.create({
      nome: createUserDto.nome,
      email: createUserDto.email,
      password: passwordHash,
    });

    await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
