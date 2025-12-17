import { Library } from "./Library";
import { Book } from "./models/Book";
import { Member } from "./models/Member";

const l = new Library();
l.addBook(new Book("b1", "Java Handbook", "Rahadyan"));
l.addBook(new Book("b2", "1991", "Widhi"));
l.registerMember(new Member("m1", "Saktiaji"));

console.log(
  '1. Search "Java":',
  l
    .findBooks("Java")
    .map((b) => `${b.title} ${b.isAvailable ? "Avail" : "Taken"}`)
);

console.log('2. Borrowing "Java"...');
l.borrowBook("m1", "b1");
console.log(
  "   Status:",
  l
    .findBooks("Java")
    .map((b) => `${b.title} ${b.isAvailable ? "Avail" : "Taken"}`)
);

console.log('3. Returning "Java"...');
l.returnBook("m1", "b1");
console.log(
  "   Status:",
  l
    .findBooks("Java")
    .map((b) => `${b.title} ${b.isAvailable ? "Avail" : "Taken"}`)
);
