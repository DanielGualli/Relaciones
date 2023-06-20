import { Injectable } from '@nestjs/common';
import { RepositoryEnum } from 'src/shared/enums';
import { ProductEntity } from '../entities';
import { Repository } from 'typeorm';
import { CreateProductDto, ReadProductDto } from '../dtos';

@Injectable()
export class VentasService {
constructor(
    @Inject(RepositoryEnum.PRODUCT_REPOSITORY)
    private repository:Repository<ProductEntity>
)
async create(payload: CreateProductDto): Promise<ServiceResponseHttpModel>{
    const newProduct = this.repository.create(payload);
    const productCreated = await this.repository.save(newProduct);

    return {data: plainToInstance(ReadProductDto, productCreated)}
}
async catalogue(): Promise<ServiceResponseHttpModel>{
    const response = this.repository.findAndCount({take: 1000});
    return {data: response[0],
            pagination: {totalItems: response[1], limit: 10}
        };
}


}


