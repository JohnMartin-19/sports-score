import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { ProductRepository } from './model/product.repository';
@NgModule({
  declarations: [AppComponent ],
  imports: [BrowserModule,StoreModule],
  providers: [ProductRepository],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
