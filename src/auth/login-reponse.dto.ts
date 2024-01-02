import { Int, Field, ObjectType, InputType } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class LoginResponse {
  @Field(() => String)
  access_token: string;

  @Field(() => User)
  user: User;
}

@InputType()
export class LoginInput {
  @Field()
  username: string;

  @Field()
  password: string;
}
