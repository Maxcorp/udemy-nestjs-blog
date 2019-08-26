import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
      TypeOrmModule.forRoot(typeOrmConfig),
      CategoriesModule,
  ],
})
export class AppModule {}