import { Component } from 'react';
import './App.css';
import { nanoid } from 'nanoid';

import IContact from './interfaces/Contact.interface';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import Notification from './components/Notification/Notification';

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

    if (this.state.contacts.some((contact: IContact) => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

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
        <Filter filter={this.state.filter} handleFilter={this.handleFilter} />
        {visibleContacts.length > 0 ? (
          <ContactList contacts={visibleContacts} />
        ) : (
          <Notification notice={'Not contacts found'} />
        )}
      </div>
    );
  }
}

export default App;
