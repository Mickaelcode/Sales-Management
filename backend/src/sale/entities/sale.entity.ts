import {Column, Entity, PrimaryColumn, PrimaryColumnCannotBeNullableError} from "typeorm";

@Entity()
export class Sale {
	@PrimaryColumn("varchar")
	numProduit : string

	@Column("varchar")
	design : string

	@Column("decimal")
	prix : number

	@Column("decimal")
	quantite :number

}

