import { EntityRepository, Repository } from "typeorm";
import { Article } from "./article.entity";
import { ArticleDto } from "./dto/article.dto";
import { InternalServerErrorException } from "@nestjs/common";
import { Category } from "src/categories/category.entity";

@EntityRepository(Article)
export class ArticleRepository extends Repository<Article> {
    
    async getArticles(): Promise<Article[]> {
        const articles = await Article.find({});

        return articles;
    }

    async createArticle(articleDto: ArticleDto, category: Category): Promise<Article> {
        const { name,  body } = articleDto;

        const article = new Article();
        article.name = name;
        article.body = body;
        article.category = category;

        try {
            await article.save();
        } catch(error) {
            throw new InternalServerErrorException();
        }

        return article;
    }

    async updateArticle() {

    }
}