//import { IsString, Length } from "class-validator";
export class UKDto{
    //@IsString({message: 'Must be a string'})
    readonly Строка_1:string;
    //@Length(6,8,{message:'Uncorrected postal code'})
    //@IsString({message: 'Must be a string'})
    readonly Строка_5: string;
}
