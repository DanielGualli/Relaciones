import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, isNotEmpty } from "class-validator";

export class BaseCategoryDto{
    @IsString(isStringValidationOption())
    @IsNotEmpty()
    readonly name:string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    readonly description:string;
}



