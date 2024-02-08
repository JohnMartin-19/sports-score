import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";

@Component({
    template:'<div><h3 class="bg-info p1 text-white"> Cart Detail Component</h3></div>'
})
export class CartDetailComponent {
    constructor(public cart:Cart) {}  // Injects the service into this component's scope so
}
