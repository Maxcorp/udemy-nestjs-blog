import { Controller, Get, Post, Body, Param, ParseIntPipe, Patch, Delete, UseGuards, Req } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticleDto } from './dto/article.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/users/get-user.decorator';

@Controller('articles')
export class ArticlesController {
    constructor(private articlesService: ArticlesService) {}

    @Get()
    getArticle() {
        return this.articlesService.getArticles();
    }

    @Post()
    @UseGuards(AuthGuard())
    createAricle(@Body() articleDto: ArticleDto, @GetUser() user) {
        console.log(user);
        return this.articlesService.createArticle(articleDto);
    }

    @Patch('/:id')
    @UseGuards(AuthGuard())
    updateArticle(
        @Param('id', ParseIntPipe) id: number, 
        @Body() articleDto: ArticleDto, 
        @GetUser() user
    ) {
        return this.articlesService.updateArticle(id, articleDto);
    }

    @Delete('/:id')
    @UseGuards(AuthGuard())
    deleteArtcile(@Param('id', ParseIntPipe) id: number, @GetUser() user) {
        return this.articlesService.deleteArticle(id);
    }
}
