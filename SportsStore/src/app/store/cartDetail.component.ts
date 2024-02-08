import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";

@Component({
    templateUrl:"cartDetail.component.html"
})
export class CartDetailComponent {
    constructor(public cart:Cart) {}  // Injects the service into this component's scope so
}
