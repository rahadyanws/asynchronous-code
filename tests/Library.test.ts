import { Library } from '../src/Library';
import { Book } from '../src/models/Book';
import { Member } from '../src/models/Member';

describe('Library System', () => {
    let library: Library;

    beforeEach(() => {
        library = new Library();
        library.addBook(new Book('b1', 'Harry Potter', 'J.K. Rowling'));
        library.addBook(new Book('b2', 'Lord of the Rings', 'J.R.R. Tolkien'));
        library.registerMember(new Member('m1', 'John Doe'));
    });

    test('should search books by title', () => {
        const results = library.findBooks('Harry');
        expect(results).toHaveLength(1);
        expect(results[0].title).toBe('Harry Potter');
    });

    test('should search books by author', () => {
        const results = library.findBooks('Tolkien');
        expect(results).toHaveLength(1);
        expect(results[0].title).toBe('Lord of the Rings');
    });

    test('should borrow book successfully', () => {
        library.borrowBook('m1', 'b1');

        const books = library.findBooks('Harry');
        expect(books[0].isAvailable).toBe(false);
    });

    test('should prevent borrowing unavailable book', () => {
        library.borrowBook('m1', 'b1');

        expect(() => {
            library.borrowBook('m1', 'b1');
        }).toThrow('Book is not available');
    });

    test('should prevent borrowing by invalid member', () => {
        expect(() => {
            library.borrowBook('invalid-member', 'b1');
        }).toThrow('Member not found');
    });

    test('should return book successfully', () => {
        library.borrowBook('m1', 'b1');
        library.returnBook('m1', 'b1');

        const books = library.findBooks('Harry');
        expect(books[0].isAvailable).toBe(true);
    });

    test('should throw error when returning book not borrowed', () => {
        expect(() => {
            library.returnBook('m1', 'b1');
        }).toThrow('Member does not have this book');
    });
});
