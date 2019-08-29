import { Injectable, NotFoundException } from '@nestjs/common';
import { ArticleDto } from './dto/article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleRepository } from './article.repository';
import { Article } from './article.entity';
import { CategoryRepository } from 'src/categories/category.repository';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(ArticleRepository)
        private articleRepository: ArticleRepository
    ) {}

    async getArticles(): Promise<Article[]> {
        return this.articleRepository.getArticles();
    }

    async createArticle(articleDto: ArticleDto) {

    }

    async updateArticle(id: number, articleDto: ArticleDto) {
        
    }

    async deleteArticle(id: number) {
        
    }
}
