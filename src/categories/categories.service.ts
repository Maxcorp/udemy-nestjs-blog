import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(CategoryRepository)
        private categoryRepository: CategoryRepository
    ){}
    
    async getCategories(): Promise<Category[]> {
        return await this.categoryRepository.getCategories();
    }

    async createCategory() { 
    }

    async udpateCategory() {
        
    }

    async deleteCategory() {
        
    }
}
