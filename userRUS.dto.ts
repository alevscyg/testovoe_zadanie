//import { IsNumber, IsString, Length } from "class-validator";
export class RUSDto{
    //@IsString({message: 'Должно быть строкой'})
    readonly Строка_1:string;
    //@Length(6,6,{message:'Некорретный почтовый индекс'})
    //@IsNumber({},{message:'Должно быть числом'})
    readonly Строка_5: number;
}
