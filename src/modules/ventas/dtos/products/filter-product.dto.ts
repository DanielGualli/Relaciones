import { IsNumber, IsOptional, IsString, isString } from "class-validator";
import { PaginationDto } from "../pagination.dto";

export class FilterProductDto extends PaginationDto{

@IsOptional()
@IsString(isStringValidationOptions())
readonly title:string;

}