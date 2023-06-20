import { Exclude, Expose } from "class-transformer";
import { BaseCategoryDto } from "./base-category.dto";

@Exclude()
export class ReadCategoryDto extends BaseCategoryDto{
    
@Expose()
readonly name;

@Expose()
readonly description;

}