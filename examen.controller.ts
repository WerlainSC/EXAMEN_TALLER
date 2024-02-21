import { Controller, Get, Render } from '@nestjs/common';
import { METHODS } from 'http';
import { Request } from '@nestjs/common';



@Controller('nosirve')
export class ExamenController {
    @Get()
    @Render('index') 
    root() {
        return { message: 'hola hola!' };
    }
}
