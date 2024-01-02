import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginInput } from './login-reponse.dto';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = this.userService.findOne(username);

    const valid = bcrypt.compare(password, user.password);
    if (user && valid) {
      const { ...result } = user;
      return result;
    }

    return 'Not Authenticated';
  }

  login(user: User) {
    if (!user) {
      throw new Error('Nonsense');
    }
    return {
      user,
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.id,
      }),
    };
  }

  async signup(creds: LoginInput) {
    const user = this.userService.findOne(creds.username);
    if (user) {
      throw new Error('User Already exist');
    }
    const password = await bcrypt.hash(creds.password, 10);

    return this.userService.createUser({
      ...creds,
      password,
    });
  }
}
