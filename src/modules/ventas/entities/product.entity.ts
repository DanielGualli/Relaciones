import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoryEntity } from "./category.entity";

@Entity('products', { schema: 'ventas' })

export class ProductEntity {

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

    @ManyToOne(() => CategoryEntity, category => category.products)
    category: CategoryEntity;

    /*@Column('varchar', {
        name:'code',
        nullable:false,
        comment: 'codigo del producto',
        })
        code: string;*/

    @Column('varchar', {
        name:'title',
        nullable:false,
        comment: 'Nombre del producto',
        })
        titleAt: string;
        
        @Column('integer', {
            name:'price',
            nullable:false,
            comment: 'precio del producto',
        })
        priceAt:number;
        
        @Column('varchar', {
            name:'description',
            nullable:true,
            comment: 'descripcion del producto',
        })
        descriptionAt:string;
        
        @Column('varchar',{
            name:'images',
            nullable:true,
            comment: 'imagen del producto',
        })
        imagesAt:string;

        @Column('varchar', {
            name:'category',
            nullable:false,
            comment:'categoría del producto'
        })
        categoryAt:string;


/*
        @BeforeInsert()
        @BeforeUpdate()
        async setCode(){
            if(!this.code){
                return;
            }
            this.code = this.setCode.toUpperCase ().trim();
        }*/
        /*@BeforeInsert()
        @BeforeUpdate()
        async setMail(){
            if(!this.mail){
                return;
            }
            this.mail = this.setMail.toLowerCase().trim();
        }*/

       /* @BeforeInsert()
        @BeforeUpdate()
        async setPassword(){
            if(!this.password){
                return;
            }
            this.password = await Bcrypt.hash(this.password,12);

        }*/

        
}


