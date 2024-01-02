import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field()
  username: string;

  @Field()
  password: string;
}
