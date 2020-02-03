using System.Collections.Generic;
using System.Threading.Tasks;
using BookStore.DAL.Models;

namespace BookStore.BLL.Interfaces
{
    public interface IBookService
    {
        Task<Book> CreateBook(Book book);

        Task UpdateBook(Book book);

        Task DeleteBook(Book book);

        Task<List<Book>> GetBooks();

        Task<Book> GetBook(int id);
    }
}
