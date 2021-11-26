import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Taxa } from 'src/taxa/models/taxa.entity';
import { TaxaModule } from '../taxa/taxa.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'db-taxa',
      entities: [Taxa],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TaxaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
