import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'teeboy',
      password: 'not-secure',
    },
    {
      id: 2,
      username: 'veeboy',
      password: 'not-secure-again',
    },
  ];

  createUser(model: CreateUserInput) {
    const user = {
      ...model,
      id: this.users.length + 1,
    };

    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
