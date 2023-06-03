import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController{
    
    @Get()
    getAll():string {
        return'getAll'
    }
    
    @Get(':id')
    getOne(@Param('id') id: string):string {
        return 'getOne' + id
    }

    @Post()
    create(@Body() CreateProductDto: CreateProductDto): string {
        return `Title: ${CreateProductDto.title} Price: ${CreateProductDto.price}`
    }

    @Delete()
    remove() {
        
    }

    @Put()
    update() {
        
    }
}
    


