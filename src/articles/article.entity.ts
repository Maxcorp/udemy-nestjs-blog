import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

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

    @Column()
    userId: number

    @CreateDateColumn()
    created: Date

    @UpdateDateColumn()
    updated: Date
}