import { Injectable } from '@nestjs/common';
import { ArticleDto } from './dto/article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleRepository } from './article.repository';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(ArticleRepository)
        private articleRepository: ArticleRepository
    ) {}

    async getArticles() {
        
    }

    async createArticle(articleDto: ArticleDto) {
        
    }

    async updateArticle(id: number, articleDto: ArticleDto) {
        
    }

    async deleteArticle(id: number) {
        
    }
}
