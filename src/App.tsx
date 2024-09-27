import { Component } from 'react';
import { nanoid } from 'nanoid';
import style from './App.module.css';

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
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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

  deleteContact = (contactID: string) => {
    this.setState(prevEvent => ({
      contacts: prevEvent.contacts.filter(({ id }) => id !== contactID),
    }));
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
      <div className={style.app}>
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm creationContact={this.creationContact} />
        <h2 className={style.title}>Contacts</h2>
        <Filter filter={this.state.filter} handleFilter={this.handleFilter} />
        {visibleContacts.length > 0 ? (
          <ContactList contacts={visibleContacts} deleteContact={this.deleteContact} />
        ) : (
          <Notification notice={'Not contacts found'} />
        )}
      </div>
    );
  }
}

export default App;
