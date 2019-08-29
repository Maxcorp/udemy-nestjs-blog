import { Controller, Get, Post, Body, Patch, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryDto } from './dto/category.dto';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) {}

    @Get()
    getCategories() {
        return this.categoriesService.getCategories();
    }

    @Post()
    createCategory(@Body() categoryDto: CategoryDto) {
        return this.categoriesService.createCategory(categoryDto);
    }

    @Patch('/:id')
    updateCategory(@Param('id', ParseIntPipe) id: number, categoryDto: CategoryDto) {
        return this.categoriesService.updateCategory(id, categoryDto);
    }

    @Delete('/:id')
    deleteCategory(@Param('id', ParseIntPipe) id: number) {
        return this.categoriesService.deleteCategory(id);
    }
} 