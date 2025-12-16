import { Book } from './models/Book';
import { Member } from './models/Member';

export class Library {
    private books = new Map<string, Book>();
    private members = new Map<string, Member>();

    addBook(book: Book) { this.books.set(book.id, book); }
    registerMember(member: Member) { this.members.set(member.id, member); }

    findBooks(query: string): Book[] {
        return [...this.books.values()].filter(b =>
            `${b.title} ${b.author}`.toLowerCase().includes(query.toLowerCase())
        );
    }

    borrowBook(mId: string, bId: string): void {
        const m = this.members.get(mId), b = this.books.get(bId);
        if (!m || !b) throw new Error('Member Or Book Not Found');

        if (!b.isAvailable) throw new Error('Unavailable');
        if (m.borrowedBooks.includes(bId)) throw new Error('Already Borrowed');

        b.isAvailable = false;
        m.borrowedBooks.push(bId);
    }

    returnBook(mId: string, bId: string): void {
        const m = this.members.get(mId), b = this.books.get(bId);
        if (!m || !b) throw new Error('Member Or Book Not Found');

        const idx = m.borrowedBooks.indexOf(bId);
        if (idx === -1) throw new Error('Not Borrowed');

        b.isAvailable = true;
        m.borrowedBooks.splice(idx, 1);
    }
}
