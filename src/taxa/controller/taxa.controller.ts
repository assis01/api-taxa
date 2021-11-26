import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { Taxa } from '../models/taxa.entity';

import { TaxaService } from '../services/taxa.service';

@Controller('/taxa')
export class TaxaController {
  constructor(private readonly taxaService: TaxaService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async finadAll(): Promise<Taxa[]> {
    try {
      return await this.taxaService.findAll();
    } catch (error) {
      if (error.status) {
        throw new HttpException(error.message, error.status);
      }
      throw new InternalServerErrorException('Unexpected error');
    }
  }
  @Get('categoria')
  @HttpCode(HttpStatus.OK)
  async findByCategoria(
    @Query() query: { param: string },
  ): Promise<Taxa[]> {
    try {
      return await this.taxaService.findByCategoria(query.param);
    } catch (error) {
      if (error.status) {
        throw new HttpException(error.message, error.status);
      }
      throw new InternalServerErrorException('Unexpected error');
    }
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  async create(@Body() taxa: Taxa): Promise<Taxa> {
    try {
      return await this.taxaService.create(taxa);
    } catch (error) {
      if (error.status) {
        throw new HttpException(error.message, error.status);
      }
      throw new InternalServerErrorException('Unexpected error');
    }
  }
  @Put()
  @HttpCode(HttpStatus.OK)
  async update(@Body() taxa: Taxa): Promise<Taxa> {
    try {
      return await this.taxaService.update(taxa);
    } catch (error) {
      if (error.status) {
        throw new HttpException(error.message, error.status);
      }
      throw new InternalServerErrorException('Unexpected error');
    }
  }
  @Delete()
  async remover(@Query() query: { id: number }): Promise<DeleteResult> {
    try {
      return await this.taxaService.delete(query.id);
    } catch (error) {
      if (error.status) {
        throw new HttpException(error.message, error.status);
      }
      throw new InternalServerErrorException('Unexpected error');
    }
  }
}
