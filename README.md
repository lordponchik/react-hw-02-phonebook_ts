<h1 id="home">Homework :clipboard:</h1>

## react-hw-02-phonebook_ts

- 🇺🇸 [English](#en)
- 🇺🇦 [Ukrainian](#uk)
- 🇷🇺 [Russian](#ru)

---

<h3 id="en">📚 EN 📚</h3>

# Acceptance criteria

- Repository `react-hw-02-phonebook_ts` created
- When submitting homework, there are two links: to the source files and working pages of each task
  on `GitHub Pages`.
- When running the task code, there are no errors or warnings in the console.
- Each component has a separate file in the `src/components` folder.
- `interfaces` are described for the components.
- Everything that the component expects as props is passed to it when called.
- JS code is clean and clear, `Prettier` is used.
- Styling is done by `CSS modules` or `Styled Components`.

# Phonebook

Write an application to store phonebook contacts.

## Step 1

The application should consist of a form and a list of contacts. In this step, implement adding a
contact name and displaying the list of contacts. The application should not save contacts between
different sessions (page refresh).

Use this input markup with built-in validation for the contact name.

```html
<input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
```

The state stored in the parent component `<App>` must be of the following type, new properties
cannot be added.

```bash
state = {
  contacts: [],
  name: ''
}
```

Each contact should be an object with `name` and `id` properties. Use any suitable package to
generate identifiers, for example [nanoid](https://www.npmjs.com/package/nanoid). After completing
this step, the application should look something like this.

![preview](./hw/step-1.png)

## Step 2

Extend the functionality of the application by allowing users to add phone numbers. To do this, add
`<input type="tel">` to the form, and a property to store its value in the state.

```bash
state = {
  contacts: [],
  name: '',
  number: ''
}
```

Use this input markup with built-in validation for the contact number.

```html
<input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
```

After completing this step, the application should look something like this.

![preview](./hw/step-2.png)

## Step 3

Add a search field that can be used to filter the contact list by name.

- The search field is a formless input whose value is written to the state (controlled element).
- The filtering logic should be case-insensitive.

```bash
state = {
  contacts: [],
  filter: '',
  name: '',
  number: ''
}
```

![preview](./hw/step-3.gif)

When we are working on a new feature, it is often convenient to hard-code some data into the state.
This will eliminate the need to manually enter data into the interface to test the new feature. For
example, you can use this initial state.

```bash
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}
```

## Step 4

If your application is implemented in a single `<App>` component, refactor it by separating the
relevant parts into separate components. The root `<App>` component will only have the `contacts`
and `filter` properties in its state.

```bash
state = {
  contacts: [],
  filter: ''
}
```

It is enough to select four components: the contact adding form, the contact list, the contact list
item, and the search filter.

After refactoring, the root component of the application will look like this.

```jsx
<div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div>
```

## Step 5

Prevent the user from adding contacts whose names are already in the phone book. When attempting to
do so, display an `alert` with a warning.

![preview](./hw/step-5.png)

## Step 6

Extend the functionality of the application by allowing the user to delete previously saved
contacts.

![preview](./hw/step-6.gif)

---

---

<h3 id="uk">📚 UK 📚 <a href="#home">⬆ Home ⬆</a></h3>

# Критерії прийому

- Створено репозиторій `react-hw-02-phonebook_ts`
- При здачі домашньої роботи є два посилання: на вихідні файли та робітники сторінки кожного
  завдання на `GitHub Pages`.
- При запуску коду завдання, в консолі немає помилок та попереджень.
- Для кожного компонента є окремий файл у папці `src/components`.
- Для компонентів описано `interfaces`.
- Все, що компонент чекає у вигляді пропсів, передається йому при виклику.
- JS-код чистий та зрозумілий, використовується `Prettier`.
- Стилізація виконана `CSS-модулями` або `Styled Components`.

# Телефонна книга

Напиши програму зберігання контактів телефонної книги.

## Крок 1

Програма повинна складатися з форми та списку контактів. На поточному кроці реалізуй додавання імені
контакту та відображення списку контактів. Додаток не повинен зберігати контакти між різними сесіями
(оновлення сторінки).

Використовуйте цю розмітку інпуту з вбудованою валідацією для імені контакту.

```html
<input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
```

Стан, що зберігається в батьківському компоненті `<App>` обов'язково має бути наступного виду,
додавати нові властивості не можна.

```bash
state = {
  contacts: [],
  name: ''
}
```

Кожен контакт повинен бути об'єктом з властивостями `name` та `id`. Для генерації ідентифікаторів
використовуй будь-який відповідний пакет, наприклад [nanoid] (https://www.npmjs.com/package/nanoid).
Після завершення цього кроку, додаток має виглядати приблизно так.

![preview](./hw/step-1.png)

## Крок 2

Розшир функціонал програми, дозволивши користувачам додавати номери телефонів. Для цього додай
`<input type="tel">` у форму, та властивість для зберігання його значення може.

```bash
state = {
  contacts: [],
  name: '',
  number: ''
}
```

Використовуйте цю розмітку інпуту з вбудованою валідацією для контактного номера.

```html
<input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
```

Після завершення цього кроку, програма має виглядати приблизно так.

![preview](./hw/step-2.png)

## Крок 3

Додай поле пошуку, яке можна використовувати для фільтрації списку контактів на ім'я.

- Поле пошуку - це інпут без форми, значення якого записується в стан (Контрольований елемент).
- Логіка фільтрації має бути нечутливою до регістру.

```bash
state = {
  contacts: [],
  filter: '',
  name: '',
  number: ''
}
```

![preview](./hw/step-3.gif)

Коли ми працюємо над новим функціоналом, буває зручно жорстко закодувати деякі дані у стан. Це
позбавить необхідності вручну вводити дані в інтерфейсі для тестування нового функціоналу.
Наприклад, можна використовувати такий початковий стан.

```bash
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}
```

## Крок 4

Якщо твоя програма реалізована в одному компоненті `<App>`, виконай рефакторинг, виділивши
відповідні частини окремі компоненти. В стані кореневого компонента `<App>` залишаться тільки
властивості `contacts` та `filter`.

```bash
state = {
  contacts: [],
  filter: ''
}
```

Достатньо виділити чотири компоненти: форма додавання контактів, список контактів, елемент списку
контактів та фільтр пошуку.

Після рефакторингу кореневий компонент програми виглядатиме так.

```jsx
<div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div>
```

## Крок 5

Заборонити користувачеві можливість додавати контакти, імена яких вже є в телефонної книги. При
спробі виконати таку дію виведи `alert` з попередженням.

![preview](./hw/step-5.png)

## Крок 6

Розшир функціонал програми, дозволивши користувачеві видаляти раніше збережені контакти.

![preview](./hw/step-6.gif)

---

---

<h3 id="ru">📚 RU 📚 <a href="#home">⬆ Home ⬆</a></h3>

# Критерии приема

- Создан репозиторий `react-hw-02-phonebook_ts`
- При сдаче домашней работы есть две ссылки: на исходные файлы и рабочие страницы каждого задания на
  `GitHub Pages`.
- При запуске кода задания, в консоли нету ошибок и предупреждений.
- Для каждого компонента есть отдельный файл в папке `src/components`.
- Для компонентов описаны `interfaces`.
- Все что компонент ожидает в виде пропсов, передается ему при вызове.
- JS-код чистый и понятный, используется `Prettier`.
- Стилизация выполнена `CSS-модулями` или `Styled Components`.

# Телефонная книга

Напиши приложение хранения контактов телефонной книги.

## Шаг 1

Приложение должно состоять из формы и списка контактов. На текущем шаге реализуй добавление имени
контакта и отображение списка контактов. Приложение не должно сохранять контакты между разными
сессиями (обновление страницы).

Используй эту разметку инпута с встроенной валидацией для имени контакта.

```html
<input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
```

Состояние хранящееся в родительском компоненте `<App>` обязательно должно быть следующего вида,
добавлять новые свойства нельзя.

```bash
state = {
  contacts: [],
  name: ''
}
```

Каждый контакт должен быть объектом со свойствами `name` и `id`. Для генерации идентификаторов
используй любой подходящий пакет, например [nanoid](https://www.npmjs.com/package/nanoid). После
завершения этого шага, приложение должно выглядеть примерно так.

![preview](./hw/step-1.png)

## Шаг 2

Расширь функционал приложения, позволив пользователям добавлять номера телефонов. Для этого добавь
`<input type="tel">` в форму, и свойство для хранения его значения в состоянии.

```bash
state = {
  contacts: [],
  name: '',
  number: ''
}
```

Используй эту разметку инпута с встроенной валидацией для номера контакта.

```html
<input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
```

После завершения этого шага, приложение должно выглядеть примерно так.

![preview](./hw/step-2.png)

## Шаг 3

Добавь поле поиска, которое можно использовать для фильтрации списка контактов по имени.

- Поле поиска это инпут без формы, значение которого записывается в состояние (контролируемый
  элемент).
- Логика фильтрации должна быть нечувствительна к регистру.

```bash
state = {
  contacts: [],
  filter: '',
  name: '',
  number: ''
}
```

![preview](./hw/step-3.gif)

Когда мы работаем над новым функционалом, бывает удобно жестко закодировать некоторые данные в
состояние. Это избавит от необходимости вручную вводить данные в интерфейсе для тестирования работы
нового функционала. Например можно использовать такое начальное состояние.

```bash
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}
```

## Шаг 4

Если твое приложение реализовано в одном компоненте `<App>`, выполни рефакторинг, выделив подходящие
части в отдельные компоненты. В состоянии корневого компонента `<App>` останутся только свойства
`contacts` и `filter`.

```bash
state = {
  contacts: [],
  filter: ''
}
```

Достаточно выделить четыре компонента: форма добавления контактов, список контактов, элемент списка
контактов и фильтр поиска.

После рефакторинга корневой компонент приложения будет выглядеть так.

```jsx
<div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div>
```

## Шаг 5

Запрети пользователю возможность добавлять контакты, имена которых уже есть в телефонной книге. При
попытке выполнить такое действие выведи `alert` с предупреждением.

![preview](./hw/step-5.png)

## Шаг 6

Расширь функционал приложения, позволив пользователю удалять ранее сохраненные контакты.

![preview](./hw/step-6.gif)
