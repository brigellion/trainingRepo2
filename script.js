'.use strict';

const books = document.querySelectorAll('.book'),
    body = document.querySelector('body'),
    ads = document.querySelector('.adv'),
    bookTitle = books[4].querySelector('a'),
    listBook2 = books[0].querySelectorAll('li'),
    listBook5 = books[5].querySelectorAll('li'),
    newChapter = document.createElement('li');
let listBook6 = books[2].querySelector('ul');

books[1].after(books[0]);
books[0].after(books[4]);
books[4].after(books[3]);
books[3].after(books[5]);

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
bookTitle.textContent = 'Книга 3. this и Прототипы Объектов';


ads.remove();

listBook2[1].after(listBook2[3]);
listBook2[3].after(listBook2[6]);
listBook2[6].after(listBook2[8]);
listBook2[9].after(listBook2[2]);

listBook5[1].after(listBook5[9]);
listBook5[9].after(listBook5[3]);
listBook5[3].after(listBook5[4]);
listBook5[2].after(listBook5[6]);
listBook5[5].after(listBook5[8]);
listBook5[6].after(listBook5[7]);

newChapter.textContent = 'Глава 8: За пределами ES6';
listBook6.append(newChapter);
listBook6 = books[2].querySelectorAll('li');
listBook6[8].after(listBook6[10]);