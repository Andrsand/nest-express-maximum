import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';

@Module({ // @Module - это декоратор
  imports: [],
  controllers: [AppController, ProductsController], // AppController из app.controller.ts
  providers: [AppService, ProductsService],
})
export class AppModule {}
