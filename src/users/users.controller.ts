import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('/signup')
    signUp(@Body(ValidationPipe) userDto: UserDto) {
        return this.usersService.signUp(userDto);
    }

    @Post('/signin')
    signIn(@Body(ValidationPipe) userDto: UserDto) {
        return this.usersService.signIn(userDto);
    }
}
