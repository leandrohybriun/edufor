import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Public } from 'src/shared/decorators/is-public.decorator';
import { AccessLevelGuard } from 'src/shared/guards/access-level.guard';
import { UserIdDto } from 'src/shared/interfaces/user-id.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { GetAllUsersDto } from './dto/get-all-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
@UseGuards(JwtAuthGuard, AccessLevelGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  @Public()
  get(@Param() { id }: UserIdDto) {
    return this.usersService.get({ id });
  }

  @Get()
  getAll(@Query() query: GetAllUsersDto) {
    return this.usersService.getAll(query);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id')
  update(@Param() { id }: UserIdDto, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update({ id }, updateUserDto);
  }

  @Delete(':id')
  delete(@Param() { id }: UserIdDto) {
    return this.usersService.delete({ id });
  }
}
