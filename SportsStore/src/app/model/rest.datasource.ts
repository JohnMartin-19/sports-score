import { Injectable } from "@angular/core";
import {HttpClient} from'@angular/common/http';
import{Observable} from 'rxjs';
import { Product } from "./product.model";
import { Order } from "./order.model";

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
    
}