import { Library } from './Library';
import { Book } from './models/Book';
import { Member } from './models/Member';

const lib = new Library();

// 1. Setup Library
console.log('--- Setting up Library ---');
lib.addBook(new Book('b1', 'The Great Gatsby', 'F. Scott Fitzgerald'));
lib.addBook(new Book('b2', '1984', 'George Orwell'));
lib.addBook(new Book('b3', 'TypeScript Handbook', 'Microsoft'));

const member = new Member('m1', 'Budi');
lib.registerMember(member);
console.log('Books and Member added.\n');

// 2. Search
console.log('--- Searching Books ---');
const searchResult = lib.findBooks('Type');
console.log('Found:', searchResult.map(b => b.title));
// Output: ['TypeScript Handbook']

// 3. Borrowing
console.log('\n--- Borrowing Book ---');
try {
    console.log(`Member ${member.name} borrowing 'The Great Gatsby'...`);
    lib.borrowBook('m1', 'b1');
    console.log('Success! Book borrowed.');
} catch (error: any) {
    console.error('Error:', error.message);
}

// 4. Verify status
const book1 = lib.findBooks('Gatsby')[0];
console.log(`\nStatus of 'The Great Gatsby': ${book1.isAvailable ? 'Available' : 'Borrowed'}`);
