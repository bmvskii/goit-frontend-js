// @@@@@@@@@ DOM @@@@@@@@@


document.addEventListener("DOMContentLoaded", () => {
    // ----- Навигация по дом

    // поиск элементов
    // const list = document.querySelector('ul');
    // const section = document.querySelector('section');
    // const title = document.querySelector('#title');
    // const img = document.querySelector('img');
    //
    // const listItems = list.querySelectorAll('li');
    // const links = list.querySelectorAll('.link');
    //
    // const listItemsArray = Array.from(listItems);
    // const linksArray = Array.from(links);

    // for (listItem of listItemsArray) {
    //     console.log("List items:", listItem);
    // }
    //
    // for (link of linksArray) {
    //     console.log("Link:", link);
    // }
    //
    // console.log("Список:", list);
    // console.log("Секция:", section);
    // console.log("Заголовок 1 уровня:", title);
    // console.log("Элементы списка:", listItems);
    // console.log("Ссылки:", links);
    // console.log("Img:", img);
    //
    // // родитель
    // console.log(title.parentElement);
    // узлы только с элементами
    // console.log(list.children);
    // // все узлы
    // console.log(list.childNodes);
    // // первый ребенок
    // console.log(list.firstChild);
    // // первый ребенок элемент
    // console.log(list.firstElementChild);
    // // последний ребенок
    // console.log(list.lastChild);
    // // последний ребенок элемент
    // console.log(list.lastElementChild);
    // //левый сосед
    // console.log(listItemsArray[2].previousSibling);
    // //левый сосед элемент
    // console.log(listItemsArray[3].previousElementSibling);
    // //правый сосед
    // console.log(listItemsArray[1].nextSibling);
    // //правый соседний элемент
    // console.log(listItemsArray[2].nextElementSibling);

    // ******* ЧТО ИСПОЛЬЗОВАТЬ?
    // все свойства, в которых есть слово Element, а также children

    // // --- textContent
    // console.log(linksArray[2].textContent);
    // linksArray[2].textContent = "Я ссылка-бунтарь!";
    // console.log(linksArray[2].textContent);
    // console.log(listItemsArray[2].textContent);

    // --- innerHTML
    // console.log(section.innerHTML);

    // ---HTMLElement.style
    // align-items => alignItems
    // background-color => backgroundColor

    // console.log("TITLE STYLES:", title.style);

    // document.querySelector('.transform-button').addEventListener('click', () => {
    //     const styles = {
    //         backgroundColor: "#777",
    //         padding: "10px",
    //         color: "white",
    //         border: "red",
    //         boxShadow: "0 0 10px 1px rgba(0,0,0,.5)",
    //         textAlign: "center",
    //         fontWeight: "bold",
    //         textTransform: "uppercase"
    //     };
    //
    //     const {backgroundColor, color, padding, border, boxShadow, textTransform, fontWeight, textAlign } = styles;
    //
    //     title.style.backgroundColor = backgroundColor;
    //     title.style.color = color;
    //     title.style.padding = padding;
    //     title.style.border = border;
    //     title.style.boxShadow = boxShadow;
    //     title.style.textTransform = textTransform;
    //     title.style.fontWeight = fontWeight;
    //     title.style.textAlign = textAlign;
    // });

    // --- Element.classList
    // Добавляет класс
    // document.body.classList.add('red');
    // document.body.classList.add('opacity');

    // console.log("Класс лист:", document.body.classList);

    // Удаляет класс
    // if (document.body.classList.contains('opacity')) {
    //     document.body.classList.remove('opacity');
    // }

    // Работает, как выключатель
    // document.body.classList.toggle('green');
    // document.body.classList.toggle('green');

    // ---- Пример с кнопкой
    // document.querySelector('.hide-section').addEventListener('click', () => {
    //     const section = document.querySelector('section');
    //     section.classList.toggle('hide-all');
    // });

    // ---- Пример с аккордеон
    // document
    //     .querySelector('.accordion')
    //     .addEventListener('click', (e) => {
    //         const target = e.currentTarget;
    //         target.classList.toggle('accordion--expanded');
    //
    //         // if (target.classList.contains('accordion--expanded')) {
    //         //     target.classList.remove('accordion--expanded');
    //         // } else {
    //         //     target.classList.add('accordion--expanded');
    //         // }
    //     });

    // --- Аттрибуты

    // --- Доступ и модификация

    // const form = document.querySelector('.form');
    // const textInput = form.querySelector('[type="text"]');
    // const checkbox = form.querySelector('[type="checkbox"]');
    // const img = form.querySelector('img');
    //
    // textInput.value = 'Содержимое input-а';
    // checkbox.checked = true;
    //
    // img.src = 'https://images.unsplash.com/photo-1588414734902-a43cfd2872dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3675&q=80';
    //
    // img.style.width = '400px';
    // img.style.height = '400px';
    // img.style.objectFit = 'cover';

    // -- has
    // console.log("Есть ли аттрибут alt у img?:",img.hasAttribute('alt'));

    // -- get
    // console.log("Содержимое src:",img.getAttribute('src'));

    // -- set
    // img.setAttribute('alt', 'Альтернативный текст');
    // img.setAttribute('title', 'Это картинка');

    // -- attributes
    // console.log("Все аттрибуты:",img.attributes);

    // -- removeAttributes
    // img.removeAttribute('title');

    // ------ Создание, удаление и клонирование элементов

    // document.createElement
    // ---- Создание
    const heading = document.createElement('h1');
    heading.setAttribute('id', 'title');
    heading.textContent = 'Hello World!';

    const image = document.createElement('img');
    image.setAttribute('src', 'https://images.unsplash.com/photo-1588414734902-a43cfd2872dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3675&q=80');
    image.setAttribute('alt', 'Альтернативный текст');

    image.style.width = '400px';
    image.style.height = '400px';
    image.style.objectFit = 'cover';

    console.log("Картинка:", image);
    console.log("Заголовок:", heading);

    const womanImage = document.createElement('img');
    womanImage.setAttribute('src', 'https://images.unsplash.com/photo-1587980876477-ea92e0191fd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=3634&q=80');
    womanImage.style.width = '400px';
    womanImage.style.height = '400px';
    womanImage.style.objectFit = 'cover';

    // appendChild
    // document.body.appendChild(heading);
    // document.body.appendChild(image);

    // insertBefore
    // document.body.appendChild(heading);
    // document.body.insertBefore(image, heading);

    // append, prepend, before, afrer, replaceWith
    document.body.append(heading);
    document.body.prepend(image);

    const p = document.createElement('p');
    p.textContent = 'Paragraph';

    image.replaceWith(womanImage);
    womanImage.after(p);

    // ---- Удаления

    // Самостоятельно
    // p.remove();

    // Через родителя
    // document.body.removeChild(p);

    // ---- Клонирования
    const womanImageClone = womanImage.cloneNode(true);
    womanImageClone.style.opacity = '0.5';

    heading.after(womanImageClone);
});