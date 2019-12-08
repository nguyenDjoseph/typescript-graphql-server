import {
    Resolver,
    Mutation,
    Arg,
    // Int,
    Query,
    InputType,
    Field
} from "type-graphql";
import { Task } from "../entity/Task";

@InputType()
class TaskInput {
    @Field()
    description: string

    @Field()
    date: string
}

@Resolver()
export class TaskResolver {
    @Mutation(() => Task)
    async createTask(@Arg("options", () => TaskInput) options: TaskInput
    ) {
        const task = await Task.create(options).save();
        return task;
    }

    // query returning an array type
    @Query(() => [Task])
    tasks() {
        return Task.find();
    }
}