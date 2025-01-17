import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import PrismaService from './prisma';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret : "halloword",
      global : true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}