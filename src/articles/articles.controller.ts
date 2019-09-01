import { Controller, Get, Post, Body, Param, ParseIntPipe, Patch, Delete, UseGuards, Req } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticleDto } from './dto/article.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/users/get-user.decorator';
import { Article } from './article.entity';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiUseTags('articles')
@Controller('articles')
export class ArticlesController {
    constructor(private articlesService: ArticlesService) {}

    @Get()
    getArticle(): Promise<Article[]> {
        return this.articlesService.getArticles();
    }

    @Post()
    @ApiBearerAuth()
    @UseGuards(AuthGuard())
    createAricle(@Body() articleDto: ArticleDto, @GetUser() user): Promise<Article> {
        console.log(user);
        return this.articlesService.createArticle(articleDto, user);
    }

    @Patch('/:id')
    @UseGuards(AuthGuard())
    @ApiBearerAuth()
    updateArticle(
        @Param('id', ParseIntPipe) id: number, 
        @Body() articleDto: ArticleDto, 
        @GetUser() user
    ): Promise<Article> {
        return this.articlesService.updateArticle(id, articleDto, user);
    }

    @Delete('/:id')
    @ApiBearerAuth()
    @UseGuards(AuthGuard())
    deleteArtcile(@Param('id', ParseIntPipe) id: number, @GetUser() user): Promise<void> {
        return this.articlesService.deleteArticle(id, user);
    }
}
