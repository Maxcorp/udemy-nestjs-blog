import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) {}

    async signUp(userDto: UserDto): Promise<void> {
        return this.userRepository.signUp(userDto);
    }

    async signIn(userDto: UserDto) {

    }
}
