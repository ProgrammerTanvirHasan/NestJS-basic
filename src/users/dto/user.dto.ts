import { IsInt, IsString } from 'class-validator';

export class userDto {
  @IsString()
  name: string;
  @IsInt()
  age: number;
}

// mainly DTO typscript a kaj korena karon typescript run time a kaj korena only deployment but jodi run time a kaj korate chay tobe class-validator install lagbe r ekta class lagbe sheta hocce class-transfromer .eitar kaj hocce client theke asha json data ke class a formate kore then validate apply kore
// R obosshoi main.ts a globally apply korte hobe
//  app.useGlobalPipes(
//   new ValidationPipe({
//     whitelist: true, //DTO  er moddhe je je value ace shudhu sheigulai thakbe baki shob remove kore deve.
//     forbidNonWhitelisted:true //vul boshoto kuno unknown filed ashle run time error debe
//   }),
// );
