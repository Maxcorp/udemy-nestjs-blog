import { Controller, Get, Post, Patch, Param, ParseIntPipe, Body, Delete } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticleDto } from 'dist/articles/dto/article.dto';

@Controller('articles')
export class ArticlesController {
    constructor(private articlesService: ArticlesService) {}

    @Get()
    getCategories() {
        
    }

    @Post()
    createCategory(@Body() articleDto: ArticleDto) {
        
    }

    @Patch('/:id')
    updateCategory(@Param('id', ParseIntPipe) id: number, articleDto: ArticleDto) {
        
    }

    @Delete('/:id')
    deleteArtcile(@Param('id', ParseIntPipe) id: number) {
    
    }
}
