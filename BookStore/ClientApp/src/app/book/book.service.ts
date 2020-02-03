import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';

@Injectable()
export class BookService {
  url: string = "";

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl;
  }

  getBooks() {
    return this.http.get(this.url + 'api/Book');
  }

  getBookById(id: number) {
    return this.http.get(this.url + 'api/Book/' + id);
  }

  createBook(book: Book) {
    return this.http.post(this.url + 'api/Book', book);
  }
  updateBook(bookId: number, book: Book) {
    return this.http.put(this.url + 'api/Book/' + bookId, book);
  }
  deleteBook(Id: number) {
    return this.http.delete(this.url + 'api/Book/' + Id);
  }
}
