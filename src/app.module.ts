import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';

@Module({ // @Module - это декоратор
  imports: [ProductsModule],
  controllers: [AppController], // AppController из app.controller.ts
  providers: [AppService],
})
export class AppModule {}
