import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  APP_PORT: process.env.APP_PORT || 3001,
  APP_BANNER: `
 _______ _______ _______ _______ 
|\\     /|\\     /|\\     /|\\     /|
| +---+ | +---+ | +---+ | +---+ |
| | H | | | E | | | F | | | X | |
| +---+ | +---+ | +---+ | +---+ |
|/_____\\|/_____\\|/_____\\|/_____\\|
    `,
}));
