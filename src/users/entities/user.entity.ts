import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;
}
