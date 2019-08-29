import { EntityRepository, Repository } from "typeorm";
import { Article } from "./article.entity";
import { ArticleDto } from "./dto/article.dto";
import { Category } from "src/categories/category.entity";
import { InternalServerErrorException } from "@nestjs/common";

@EntityRepository(Article)
export class ArticleRepository extends Repository<Article> {
    
    async getArticles(): Promise<Article[]> {
        const articles = await Article.find({});

        return articles;
    }

    async createArticle() {

    }

    async updateArticle() {

    }
}