import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { CreateMahasiswaDTO } from './dto/create-mahasiswa.dto';
import { UpdateMahasiswaDTO } from './dto/update-mahasiswa.dto';
import { get } from 'http';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserDecorator } from './user.decorator';
import { AuthGuard } from './auth.guard';
import { User } from '@prisma/client';
import { LoginUserDto } from './login-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('Mahasiswa')
  @ApiBody({ type: CreateMahasiswaDTO })
  createMahasiswa(@Body() data: CreateMahasiswaDTO) {
    return this.appService.addMahasiswa(data);
  }

  @Delete('Mahasiswa/:nim')
  deleteMahasiswa(@Param('nim') nim: string) {
    return this.appService.deleteMahasiswa(nim);
  }

  // @Put('Mahasiswa/:nim')
  // @ApiBody({ type: UpdateMahasiswaDTO })
  // editMahasiswa(@Body() { nama }: UpdateMahasiswaDTO) {
  //   return this.appService.updateMahasiswa(nama);
  // }
  @Put('Mahasiswa/:nim')
  @ApiBody({ type: UpdateMahasiswaDTO })
  editMahasiswa(
    @Param('nim') nim: string,
    @Body() { nama }: UpdateMahasiswaDTO,
  ) {
   
  }

  @Get('Mahasiswa')
  getMahasiswa() {
    return this.appService.getMahasiswa();
  }
  @Post("register")
  @ApiBody({
    type : RegisterUserDto

  })
  register(@Body() data : RegisterUserDto) {
    return this.appService.register(data)
  }

  @Get("/auth")
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  auth(@UserDecorator() user : User) {
  return user
  }


  @Post("login")
  @ApiBody({
    
  })
  login (@Body() data : LoginUserDto) {
    return this.appService.login(data)
  }

  @Get('Mahasiswa/:nim')
  getMahasiswaByNim(@Param('nim') nim: string) {
    return this.appService.getMahasiswaByNIM(nim);
  }

 
}