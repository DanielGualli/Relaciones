import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Class Web Aplication Progamming 2023 ';
  }

  getAll():string[]{
    return [ "zapatos", "Zapatos deportivos"]
  }
}
