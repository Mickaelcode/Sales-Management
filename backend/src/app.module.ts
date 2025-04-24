import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Sale} from './sale/entities/sale.entity';
import {SaleModule} from './sale/sale.module';


@Module({
  imports: [
	TypeOrmModule.forRoot({
		type:'postgres',
		host: process.env.HOST,
		port: parseInt(process.env.PORT!),
		password :'chrysler0862',
		username: 'postgres',
		entities:[Sale],
		database: 'salemanagement',
		synchronize: true,
	}),
	SaleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
