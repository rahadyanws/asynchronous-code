import { Book } from './models/Book';
import { Member } from './models/Member';

export class Library {
    private books: Map<string, Book> = new Map();
    private members: Map<string, Member> = new Map();

    addBook(book: Book): void {
        this.books.set(book.id, book);
    }

    registerMember(member: Member): void {
        this.members.set(member.id, member);
    }

    findBooks(query: string): Book[] {
        const results: Book[] = [];
        const lowerQuery = query.toLowerCase();

        for (const book of this.books.values()) {
            if (book.title.toLowerCase().includes(lowerQuery) ||
                book.author.toLowerCase().includes(lowerQuery)) {
                results.push(book);
            }
        }
        return results;
    }

    borrowBook(memberId: string, bookId: string): void {
        const member = this.members.get(memberId);
        const book = this.books.get(bookId);

        if (!member) throw new Error('Member not found');
        if (!book) throw new Error('Book not found');

        if (!book.isAvailable) {
            throw new Error('Book is not available');
        }

        // Check if member already has this book
        if (member.borrowedBooks.includes(bookId)) {
            throw new Error('Member already has this book');
        }

        book.isAvailable = false;
        member.borrowedBooks.push(bookId);
    }

    returnBook(memberId: string, bookId: string): void {
        const member = this.members.get(memberId);
        const book = this.books.get(bookId);

        if (!member) throw new Error('Member not found');
        if (!book) throw new Error('Book not found');

        const index = member.borrowedBooks.indexOf(bookId);
        if (index === -1) {
            throw new Error('Member does not have this book');
        }

        book.isAvailable = true;
        member.borrowedBooks.splice(index, 1);
    }
}
