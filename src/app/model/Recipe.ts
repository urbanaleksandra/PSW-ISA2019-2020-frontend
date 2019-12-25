import { Drug } from './Drug';

export class Recipe{
    id: number = 0;
    name: string = "";
    description: string = "";
    drug: Drug;
}