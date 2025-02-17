import { BadRequestException, Controller, Param, Post, Res, UploadedFile, UseInterceptors, Get, Query, Search } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { UserDecorator } from 'src/user.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { User } from '@prisma/client';
import { Response } from 'express';


@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
    
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
   uploadFile(@UploadedFile() file: Express.Multer.File, @UserDecorator() user : User) {
       if(file == null)throw new BadRequestException("file tidak boleh kosong!")

      return this.profileService.uploadFile(file, user.id);
  }

  @Get("search")
  async getName(
    @Query("search") Search : string,
  ) {
    return Search
  }

  @Get("/:id") 
  async getProfile(@Param("id") id : number, @Res() res : Response) {
    const filename = await this.profileService.sendMyFotoProfile(id)
    return res.sendFile('../../uploads/' + filename)
  }

  
    
}
