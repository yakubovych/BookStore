import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import { BooksComponent } from './book/book.component';
import { AddBookComponent } from './book/addbook.component';
import { EditBookComponent } from './book/editbook.component';
import { BookService } from './book/book.service';
import { AdminPageComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    BooksComponent,
    AddBookComponent,
    EditBookComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'books', component: BooksComponent },
      { path: 'add-book', component: AddBookComponent },
      { path: 'books/edit/:id', component: EditBookComponent },
      { path: 'auth', component: AdminPageComponent }
    ])
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
