export interface User{
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    passwordHash:number[];
    passwordSalt:number[];
    status:boolean

}