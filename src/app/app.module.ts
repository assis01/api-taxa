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
    TypeOrmModule.forRoot(),
    TaxaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
