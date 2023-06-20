//import {DataSourceEnum, RepositoryEnum } from '@shared/enums';
import { DataSource } from 'typeorm';
import { CategoryEntity, ProductEntity } from '../entities';
import { DataSourceEnum, RepositoryEnum } from 'src/shared/enums';

export const ventasProviders = [
    {
        provide:RepositoryEnum.PRODUCT_REPOSITORY,
        useFactory: (dataSource:DataSource) =>
        dataSource.getRepository(ProductEntity),
        inject: [DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide:RepositoryEnum.CATEGORY_REPOSITORY,
        useFactory: (dataSource:DataSource) =>
        dataSource.getRepository(CategoryEntity),
        inject: [DataSourceEnum.PG_DATA_SOURCE],
    },

];