using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookStore.BLL.Interfaces;
using BookStore.DAL.DataAccess;
using BookStore.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace BookStore.BLL.Services
{
    public class BookService : IBookService
    {
        private readonly DataContext context;

        public BookService(DataContext _context)
        {
            context = _context;
        }

        public async Task<Book> CreateBook(Book book)
        {
            context.Books.Add(book);
            await context.SaveChangesAsync();
            return book;
        }

        public async Task UpdateBook(Book book)
        {
            this.context.Entry(book).State = EntityState.Modified;
            await context.SaveChangesAsync();
        }

        public async Task DeleteBook(Book book)
        {
            context.Books.Remove(book);
            await context.SaveChangesAsync();
        }

        public async Task<List<Book>> GetBooks()
        {
            return await context.Books.ToListAsync();
        }

        public async Task<Book> GetBook(int id)
        {
            return await context.Books.Where(b => b.Id == id).FirstOrDefaultAsync();
        }
    }
}
