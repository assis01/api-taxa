import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxaController } from './controller/taxa.controller';
import { Taxa } from './models/taxa.entity';
import { TaxaService } from './services/taxa.service';

@Module({
  imports: [TypeOrmModule.forFeature([Taxa])],
  controllers: [TaxaController],
  providers: [TaxaService],
})
export class TaxaModule {}
