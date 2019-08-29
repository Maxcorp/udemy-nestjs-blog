import { Injectable, NotFoundException } from '@nestjs/common';
import { ArticleDto } from './dto/article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleRepository } from './article.repository';
import { Article } from './article.entity';
import { CategoryRepository } from 'src/categories/category.repository';
import { Category } from 'src/categories/category.entity';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(ArticleRepository)
        private articleRepository: ArticleRepository,
        @InjectRepository(CategoryRepository)
        private categoryRepository: CategoryRepository,
    ) {}

    async getArticles(): Promise<Article[]> {
        return this.articleRepository.getArticles();
    }

    async createArticle(articleDto: ArticleDto): Promise<Article> {
       const category = await Category.findOne(articleDto.categoryId);

       if(!category) {
            throw new NotFoundException();
       }

       return await this.articleRepository.createArticle(articleDto, category);
    }

    async updateArticle(id: number, articleDto: ArticleDto): Promise<Article> {
        return await this.articleRepository.updateArticle(id, articleDto);
    }

    async deleteArticle(id: number) {
        
    }
}
