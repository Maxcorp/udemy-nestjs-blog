import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Category } from "src/categories/category.entity";

@Entity()
export class Article extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    body: string;

    @Column()
    categoryId: number;

    @Column({nullable:true})
    userId: number

    @ManyToOne(type => Category, category => category.article, { eager: true })
    category: Category;

    @CreateDateColumn()
    created: Date

    @UpdateDateColumn()
    updated: Date
}