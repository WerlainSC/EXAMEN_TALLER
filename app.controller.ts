import { Get, Controller, Render } from '@nestjs/common';

@Controller('/app')
export class AppController {
  @Get('/principal')
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
  @Get('/examen')
  @Render('examen')
  hello() {
    return { message: 'EXAMEN!' };
  }

}
