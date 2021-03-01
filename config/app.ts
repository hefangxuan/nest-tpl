import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  APP_PORT: process.env.APP_PORT || 3001,
}));
