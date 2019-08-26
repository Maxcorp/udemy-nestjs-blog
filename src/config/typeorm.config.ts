import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: any = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'udemy_blog',
    entities: [__dirname  + '/../**/*.entity.ts'],
    synchronize: true,
}