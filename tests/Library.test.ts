import { Library } from '../src/Library';
import { Book } from '../src/models/Book';
import { Member } from '../src/models/Member';

describe('Library', () => {
    let l = new Library();
    const add = (id: string, t: string, a: string) => l.addBook(new Book(id, t, a));

    beforeEach(() => {
        l = new Library();
        add('b1', 'Javascript Handbook', 'Rowling');
        l.registerMember(new Member('m1', 'John'));
    });

    test('search', () => {
        expect(l.findBooks('Java')).toHaveLength(1);
    });

    test('borrow', () => {
        l.borrowBook('m1', 'b1');
        expect(l.findBooks('Java')[0].isAvailable).toBe(false);
    });

    test('borrow unavailable/invalid', () => {
        l.borrowBook('m1', 'b1');
        expect(() => l.borrowBook('m1', 'b1')).toThrow('Unavailable');
        expect(() => l.borrowBook('bad', 'b1')).toThrow('Member Not Found');
    });

    test('return', () => {
        l.borrowBook('m1', 'b1');
        l.returnBook('m1', 'b1');
        expect(l.findBooks('Java')[0].isAvailable).toBe(true);
    });

    test('return invalid', () => {
        expect(() => l.returnBook('m1', 'b1')).toThrow('Not Borrowed');
    });
});
