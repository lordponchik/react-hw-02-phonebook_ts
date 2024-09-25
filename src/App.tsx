import { Component } from 'react';
import './App.css';
import { nanoid } from 'nanoid';

interface IContact {
  name: string;
  id: string;
}

interface State {
  contacts: IContact[];
  name: string;
}

class App extends Component<{}, State> {
  state = {
    contacts: [],
    name: '',
  };

  submitForm = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const contact: IContact = {
      name: this.state.name,
      id: nanoid(),
    };

    this.setState(prev => ({
      contacts: [...prev.contacts, contact],
    }));
  };

  handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.currentTarget;

    this.setState({ name: value });
  };

  render() {
    return (
      <div className="App">
        <h2>Phonebook</h2>
        <form onSubmit={this.submitForm}>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <button type="submit">Add Contact</button>
        </form>
        <h2>Contacts</h2>
        {this.state.contacts.length === 0 ? (
          <p>No contacts found</p>
        ) : (
          <ul>
            {this.state.contacts.map(({ name, id }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
