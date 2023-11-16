'use strict';

const propsItem = document.querySelectorAll('.item');
const itemTitles = document.querySelectorAll('.item__title');
const propsLists = document.querySelectorAll('.props__list');
const itemImages = document.querySelector('.item__image');
const propsItemsFour = document.getElementsByClassName("props__item_four");
const propsItemsTwo = document.getElementsByClassName("props__item_two");
const content = document.querySelectorAll('.content');

propsItem[0].replaceWith(propsItem[1]);
propsItem[3].after(propsItem[0]);

itemTitles[2].textContent = 'This и прототипы объектов';
itemTitles[1].textContent = 'Область видимости и замыкание';
itemTitles[3].textContent = 'Асинхронная обработка и оптимизация';
itemTitles[4].textContent = 'ES6 и не только';

const firstItemTwo = propsItemsTwo[0];
const firstItemFour = propsItemsFour[0];

propsItemsFour[3].after(propsItemsFour[0]);
propsItemsTwo[7].after(propsItemsTwo[8]);
propsItemsTwo[7].after(propsItemsTwo[9]);

itemTitles[3].after(propsLists[3]);
itemTitles[2].after(propsLists[4]);
