import { EntityRepository, Repository } from "typeorm";
import { Category } from "./category.entity";

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
    
    async getCategories(): Promise<Category[]> {
        const category = await Category.find({});

        return category;
    }

    async createCategory() {
    }

    async udpateCategory() {
        
    }
}