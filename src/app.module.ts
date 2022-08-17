import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UsuarioModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
