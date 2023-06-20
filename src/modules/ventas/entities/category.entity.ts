import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity('categories', { schema: 'ventas' })

export class CategoryEntity {

    @PrimaryGeneratedColumn('uuid')
        id: string;
    
    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP,'
    })
    createAt:Date;

    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP,'
    })
    updateAt:Date;

    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteAt:Date;

    @OneToMany(() => ProductEntity, product => product.category )
    products:ProductEntity[];

    @Column('varchar', {
        name:'name',
        nullable:false,
        comment: 'Nombre de la categoría',
        })
        nameAt: string;
        
        @Column('varchar', {
            name:'description',
            nullable:true,
            comment: 'descripcion de la categoria',
        })
        descriptionAt:string;
}


