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

  update(numProduit: string, updateSaleDto: UpdateSaleDto) {
    return this.saleRepository.update({numProduit}, updateSaleDto)
  }

  remove(numProduit: string) {
	return this.saleRepository.delete({numProduit}) 
  }

  /**
   * create a method for getting ("montant" = "prix" * "quantity" ):
   * 
   */

  async getMontant() : Promise<Montant> {
    const sale = await this.saleRepository.find()
    const data = sale.map(item=>item.prix*item.quantite)
    const total = data.reduce((a,c)=>a+c)
    const minimum = Math.min(...data)
    const maximum = Math.max(...data)
    return {total,maximum,minimum}
    
  }
}

export interface Montant{
  total: number
  maximum: number
  minimum :number
}