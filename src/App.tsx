import { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';

interface IContact {
  name: string;
  number: string;
  id: string;
}

interface State {
  contacts: IContact[];
  filter: string;
}

class App extends Component<{}, State> {
  state = {
    contacts: [],
    filter: '',
  };

  creationContact = (name: string, number: string) => {
    const contact: IContact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    this.setState(prev => ({
      contacts: [...prev.contacts, contact],
    }));
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
        <h1>Phonebook</h1>
        <ContactForm creationContact={this.creationContact} />

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
