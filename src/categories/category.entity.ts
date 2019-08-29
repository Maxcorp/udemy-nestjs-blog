import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { type } from "os";
import { Article } from "src/articles/article.entity";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Article, article  => article.category, { eager: false })
    article: Article[];

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}