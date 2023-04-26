import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { User } from './users/user.entity';
import { Report } from './reports/report.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    // TypeOrmModule.forRootAsync({
    //   inject: [ConfigService],
    //   useFactory: (config: ConfigService) => {
    //     return {
    //       type: 'postgres',
    //       host: config.get('DB_HOST'),
    //       port: config.get('DB_PORT'),
    //       username: config.get('DB_USERNAME'),
    //       password: config.get('DB_PASSWORD'),
    //       database: config.get('DB_NAME'),
    //       entities: [User, Report],
    //       synchronize: true,
    //     };
    //   },
    // }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'postgres',
      password: 'ashutosh',
      database: 'carvalues',
      port: 5432,
      host: 'localhost',
      entities: [User, Report],
      synchronize: true,
    }),
    UsersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
