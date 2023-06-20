import { BaseProductDto } from "./base-product.dto";
import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ReadProductDto extends BaseProductDto{
    
@Expose()
readonly title;

@Expose()
readonly price;

@Expose()
readonly image;
}