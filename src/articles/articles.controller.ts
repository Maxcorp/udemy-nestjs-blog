import { Controller, Get, Post, Body, Param, ParseIntPipe, Patch, Delete, UseGuards, Req } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticleDto } from './dto/article.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('articles')
export class ArticlesController {
    constructor(private articlesService: ArticlesService) {}

    @Get()
    getArticle() {
        return this.articlesService.getArticles();
    }

    @Post()
    createAricle(@Body() articleDto: ArticleDto) {
        return this.articlesService.createArticle(articleDto);
    }

    @Patch('/:id')
    updateArticle(@Param('id', ParseIntPipe) id: number, @Body() articleDto: ArticleDto) {
        return this.articlesService.updateArticle(id, articleDto);
    }

    @Delete('/:id')
    deleteArtcile(@Param('id', ParseIntPipe) id: number) {
        return this.articlesService.deleteArticle(id);
    }
}
