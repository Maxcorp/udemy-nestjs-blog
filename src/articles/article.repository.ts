import { EntityRepository, Repository } from "typeorm";
import { Article } from "./article.entity";
import { ArticleDto } from "./dto/article.dto";
import { InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { Category } from "src/categories/category.entity";
import { User } from "src/users/user.entity";

@EntityRepository(Article)
export class ArticleRepository extends Repository<Article> {
    
    async getArticles(): Promise<Article[]> {
        const articles = await Article.find({});

        return articles;
    }

    async createArticle(articleDto: ArticleDto, category: Category, user: User): Promise<Article> {
        const { name,  body } = articleDto;

        const article = new Article();
        article.name = name;
        article.body = body;
        article.user = user;
        article.category = category;

        try {
            await article.save();
        } catch(error) {
            throw new InternalServerErrorException();
        }

        return article;
    }

    async updateArticle(id: number, articleDto: ArticleDto, user: User) {
        const article = await Article.findOne(id);

        if(!article) {
            throw new NotFoundException();
        }

        const { name,  body } = articleDto;
        
        article.name = name;
        article.body = body;
        article.user = user;
        
        try {
            await article.save();
        } catch(error) {
            throw new InternalServerErrorException();
        }

        return article;
    }
}