import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Taxa } from '../models/taxa.entity';

@Injectable()
export class TaxaService {
  constructor(
    @InjectRepository(Taxa)
    private taxaRepository: Repository<Taxa>,
  ) {}

  async findAll(): Promise<Taxa[]> {
    return await this.taxaRepository.find();
  }

  async findByCategoria(categoria: string): Promise<Taxa[]> {
    return await this.taxaRepository.find({
      where: { categoria: categoria },
    });
  }

  async create(taxa: Taxa): Promise<Taxa> {
    return this.taxaRepository.save(taxa);
  }

  async update(taxa: Taxa): Promise<Taxa> {
    return this.taxaRepository.save(taxa);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.taxaRepository.delete(id);
  }
}
