import { Allow, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, isNotEmpty } from "class-validator";
import { CategoryEntity } from "../../entities/category.entity";

export class BaseProductDto{
    @Allow()
    readonly category:CategoryEntity;
    
    @IsString(isStringValidationOption())
    @IsNotEmpty()
    readonly title:string;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    readonly price:number;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    readonly description:string;

    @IsString()
    @IsNotEmpty()
    readonly image:string;
}



