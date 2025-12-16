import { Library } from './Library';
import { Book } from './models/Book';
import { Member } from './models/Member';

const lib = new Library();
lib.addBook(new Book('b1', 'Javascript Handbook', 'Fitzgerald'));
lib.addBook(new Book('b2', '1984', 'Doe'));
lib.registerMember(new Member('m1', 'Budi'));

console.log('1. Search "Java":', lib.findBooks('Java').map(b => `${b.title} [${b.isAvailable ? 'Avail' : 'Taken'}]`));

console.log('\n2. Borrowing "Java"...');
lib.borrowBook('m1', 'b1');
console.log('   Status:', lib.findBooks('Java').map(b => `${b.title} [${b.isAvailable ? 'Avail' : 'Taken'}]`));

console.log('\n3. Returning "Java"...');
lib.returnBook('m1', 'b1');
console.log('   Status:', lib.findBooks('Java').map(b => `${b.title} [${b.isAvailable ? 'Avail' : 'Taken'}]`));
