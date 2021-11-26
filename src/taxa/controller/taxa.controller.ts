import { Controller } from '@nestjs/common';

import { TaxaService } from '../services/taxa.service';

@Controller('taxa')
export class TaxaController {
  constructor(private readonly taxaService: TaxaService) {}
}
