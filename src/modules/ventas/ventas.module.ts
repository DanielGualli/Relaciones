import { Global, Module } from '@nestjs/common';
import { ventasProviders } from './providers';

@Global()
@Module({
    imports: [ DataBaseModule],
    controllers: [],
    providers: [...ventasProviders],
    exports: [],
  })
export class VentasModule {}
