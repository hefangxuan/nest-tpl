import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import app from '../config/app';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [app],
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
