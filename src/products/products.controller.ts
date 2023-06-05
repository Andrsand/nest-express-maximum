import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Redirect } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { url } from 'inspector';

@Controller('products')
export class ProductsController{
    
    @Get()
   // @Redirect('https://google.com', 301)
    getAll():string {
        return'getAll'
    }
    
    @Get(':id')
    getOne(@Param('id') id: string):string {
        return 'getOne' + id
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('cache-Control', 'none')
    create(@Body() CreateProductDto: CreateProductDto): string {
        return `Title: ${CreateProductDto.title} Price: ${CreateProductDto.price}`
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return 'Remove ' + id
    }

    @Put(':id')
    update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
        return 'Update ' + id
    }
}
    


