import {IsAlphanumeric, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength} from "class-validator";

export class CreateSaleDto {
	@IsNotEmpty()
	@IsAlphanumeric()
	@MaxLength(4, {message:"devais avoir au plus de 4 charactères"})
	numProduit : string

	@IsString()
	@MaxLength(10, {message:"devais avoir au plus 10 charactères"})
	design : string 

	@IsNumber()
	prix : number

	@IsNumber()
	quantite : number

}

