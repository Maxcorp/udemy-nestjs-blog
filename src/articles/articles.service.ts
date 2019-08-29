import { Injectable } from '@nestjs/common';
import { ArticleDto } from './dto/article.dto';

@Injectable()
export class ArticlesService {
    async getArticles() {
        
    }

    async createArticle(articleDto: ArticleDto) {
        
    }

    async updateArticle(id: number, articleDto: ArticleDto) {
        
    }

    async deleteArticle(id: number) {
        
    }
}
