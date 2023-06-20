import { IsNumber, IsOptional, IsString, isString } from "class-validator";
import { PaginationDto } from "../pagination.dto";

export class FilterCategoryDto extends PaginationDto{

@IsOptional()
@IsString(isStringValidationOptions())
readonly name:string;

}