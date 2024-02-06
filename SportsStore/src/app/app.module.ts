import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { ProductRepository } from './model/product.repository';
@NgModule({
  declarations: [
    AppComponent // Add AppComponent here
  ],
  imports: [
    StoreModule,ProductRepository
  ],
  providers: [],
  bootstrap: [AppComponent] // If AppComponent is your root component and needs to be bootstrapped
})

export class AppModule { }
