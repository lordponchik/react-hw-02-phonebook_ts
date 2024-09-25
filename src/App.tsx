import { Component } from 'react';
import './App.css';
import { nanoid } from 'nanoid';

interface IContact {
  name: string;
  number: string;
  id: string;
}

interface State {
  contacts: IContact[];
  filter: string;
  name: string;
  number: string;
}

class App extends Component<{}, State> {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  submitForm = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const { name, number } = this.state;

    const contact: IContact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    this.setState(prev => ({
      contacts: [...prev.contacts, contact],
    }));
  };

  handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        this.setState({ name: value });
        break;
      case 'number':
        this.setState({ number: value });
        break;
    }
  };

  handleFilter = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.currentTarget;

    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(({ name }) => {
      return (name as string).toLowerCase().includes(normalizedFilter);
    });
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className="App">
        <h2>Phonebook</h2>
        <form onSubmit={this.submitForm}>
          <div className="formInputWrapper">
            <label htmlFor="name">Name </label>
            <input
              id="name"
              onChange={this.handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div className="formInputWrapper">
            <label htmlFor="number">Number</label>
            <input
              id="number"
              onChange={this.handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>

          <button type="submit">Add Contact</button>
        </form>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input type="text" onChange={this.handleFilter} />
        {visibleContacts.length === 0 ? (
          <p>No contacts found</p>
        ) : (
          <ul>
            {visibleContacts.map(({ name, number, id }) => {
              return (
                <li key={id}>
                  {name}: {number}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
