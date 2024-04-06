import { Component,IterableDiffer,IterableDiffers } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Order } from "../model/order.model";
import { OrderRepository } from "../model/order.repository";

@Component({
    templateUrl: 'orderTable.component.html'
})

export class OrderTableComponent{
    colsAndRows: string[] = ['name','zip','cart_p','cart_q','buttons']

    dateSource = new MatTableDataSource<Order>(this.repository.getOrders())
    differ: IterableDiffer<Order>;
    dataSource: any;

    constructor(private repository: OrderRepository,differs: IterableDiffers){
        this.differ = differs.find(this.repository.getOrders()).create();
        this.dataSource.filter = 'true'
        this.dataSource.filterPredicate = (order: { shipped: any; },include: { toString: () => string; }) => {
            return !order.shipped || include.toString() == 'true'
        }
    }

    get includeShipped(): boolean {
        return this.dataSource.filter == 'true';
    }

    set includeShipped(include: boolean) {
         this.dataSource.flter = include.toString()
    }
    toggleShipped(order: Order){
        order.shipped = !order.shipped;
        this.repository.updateOrders(order)
    }
    delete(id:number){
        this.repository.deleteOrder(id);
    }
    ngDoCheck(){
        let changes = this.differ?.diff(this.repository.getOrders())
        if (changes != null){
            this.dataSource.data = this.repository.getOrders()
        }
    }
}