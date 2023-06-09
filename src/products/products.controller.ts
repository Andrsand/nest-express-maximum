import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Redirect } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { url } from 'inspector';
// import { Response, Request } from 'express';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController{

    constructor(private readonly productsService: ProductsService) {

    }
    
//     @Get()
//    // @Redirect('https://google.com', 301)
//     getAll(@Req() req: Request, @Res() res: Response):string {
//         res.status(201).end('Poka')
//         return 'getAll'
    //     }
    
    @Get()
    getAll(): Promise<Product[]> {
        return this.productsService.getAll()
    }
    
    @Get(':id')
    getOne(@Param('id') id: string): Promise<Product>{
        return this.productsService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('cache-Control', 'none')
    create(@Body() CreateProductDto: CreateProductDto): Promise<Product> {
        return this.productsService.create(CreateProductDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<Product> {
        return this.productsService.remove(id)
    }

    @Put(':id')
    update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string): Promise<Product> {
        return this.productsService.update(id, updateProductDto)
    }
}
    


