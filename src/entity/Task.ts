import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Task extends BaseEntity {
    // getting a graphql type and a database type (2 for 1)
    @Field(() => Int) // graphql type
    @PrimaryGeneratedColumn() //database type
    id: number;

    @Field()
    @Column()
    description: string;

    @Field()
    @Column()
    date: string;
}