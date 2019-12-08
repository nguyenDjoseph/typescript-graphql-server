import {
    Resolver,
    Mutation,
    Arg,
    // Int,
    Query
    // InputType,
    // Field
} from "type-graphql";
import { Task } from "../entity/Task";

@Resolver()
export class TaskResolver {
    @Mutation(() => Boolean)
    async createTask(
        @Arg("description") description: string,
        @Arg("date") date: string
    ) {
        await Task.insert({ description, date });
    }

    // query returning an array type
    @Query(() => [Task])
    tasks() {
        return Task.find();
    }
}