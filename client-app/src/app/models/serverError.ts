import { number, string } from "yup";

export interface ServerError{
    statusCode :number;
    message: string;
    details: string;


}