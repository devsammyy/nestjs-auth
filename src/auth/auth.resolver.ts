import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput, LoginResponse } from './login-reponse.dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './auth.guard';
import { User } from 'src/users/entities/user.entity';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  login(@Args('creds') user: LoginInput, @Context() context) {
    return this.authService.login(context.user);
  }

  @Mutation(() => User)
  signup(@Args('creds') creds: LoginInput) {
    return this.authService.signup(creds);
  }
}
