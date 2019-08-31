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

    async createArticle(articleDto: ArticleDto, user): Promise<Article> {
       const category = await Category.findOne(articleDto.categoryId);

       if(!category) {
            throw new NotFoundException();
       }

       return await this.articleRepository.createArticle(articleDto, category, user);
    }

    async updateArticle(id: number, articleDto: ArticleDto, user): Promise<Article> {
        return await this.articleRepository.updateArticle(id, articleDto, user);
    }

    async deleteArticle(id: number, user) {
        const result = await this.articleRepository.delete({ id: id, userId: user.id });

        if(result.affected === 0) {
            throw new NotFoundException();
        }
    }
}
