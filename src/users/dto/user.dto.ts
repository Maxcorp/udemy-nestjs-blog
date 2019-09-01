import { IsString, MinLength, MaxLength } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class UserDto {
    
    @ApiModelProperty()
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    username: string;

    @ApiModelProperty()
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    password: string;
}