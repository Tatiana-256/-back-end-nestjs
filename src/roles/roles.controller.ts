import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UsersService } from "../users/users.service";
import { User } from "../users/users.model";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { RolesService } from "./roles.service";
import { Role } from "./roles.model";
import { CreateRoleDto } from "./dto/create-role.dto";


@ApiTags("Roles")
@Controller("roles")
export class RolesController {
  constructor(private roleService: RolesService) {
  }
  @ApiOperation({ summary: "create new role" })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  createRole(@Body() roleDto: CreateRoleDto){
      return this.roleService.createRole(roleDto);

  }

  @ApiOperation({ summary: "Get role bu value" })
  @ApiResponse({ status: 200, type: Role })
  @Get('/:value')
  getRoleByValue(@Param("value") value: string){
    return this.roleService.getRoleByValue(value);

  }

  // @ApiOperation({ summary: "create new user" })
  // @ApiResponse({ status: 200, type: User })
  // @Post()
  // create(@Body() userDto: CreateUserDto) {
  //   return this.userService.createUser(userDto);
  // }
  //
  // @ApiOperation({ summary: "Get all users" })
  // @ApiResponse({ status: 200, type: [User] })
  // @Get()
  // getAll() {
  //   return this.userService.getAllUsers();
  // }

}
