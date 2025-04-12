import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Controller('sale')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Post()
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.saleService.create(createSaleDto);
  }

  @Get()
  findAll() {
    return this.saleService.findAll();
  }

  @Get(':numProduit')
  findOne(@Param('numProduit') numProduit: string) {
    return this.saleService.findOne(numProduit);
  }

  @Patch(':numProduit')
  update(@Param('numProduit') numProduit: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.saleService.update(numProduit, updateSaleDto);
  }

  @Delete(':numProduit')
  remove(@Param('numProduit') numProduit: string) {
    return this.saleService.remove(numProduit);
  }
}
