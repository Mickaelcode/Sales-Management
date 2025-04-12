import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {Sale} from './entities/sale.entity';
import {Repository} from 'typeorm';

@Injectable()
export class SaleService {

	constructor(
		@InjectRepository(Sale) private readonly saleRepository: Repository<Sale>
	){}




  create(createSaleDto: CreateSaleDto): Promise<Sale> {
    const sale:Sale = new Sale()
	sale.numProduit = createSaleDto.numProduit
	sale.design = createSaleDto.design
	sale.prix = createSaleDto.prix
	sale.quantite = createSaleDto.quantite
	return this.saleRepository.save(sale)
  }

  findAll(): Promise<Sale[]> {
    return this.saleRepository.find()
  }

  findOne(numProduit:string):Promise<Sale|null> {
    return this.saleRepository.findOneBy({numProduit})
	
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return `This action updates a #${id} sale`;
  }

  remove(id: number) {
    return `This action removes a #${id} sale`;
  }
}
