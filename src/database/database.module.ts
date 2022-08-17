import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/database-provider/database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
