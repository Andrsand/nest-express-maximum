import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({ // @Module - это декоратор
  imports: [
    ProductsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/products')
  ],
  controllers: [AppController], // AppController из app.controller.ts
  providers: [AppService],
})
export class AppModule {}
