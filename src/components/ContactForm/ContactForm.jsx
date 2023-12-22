import React, { useState } from 'react';
import css from './ContactForm.module.css';

import Input from '../Input/Input';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    addContact(name, number);

    setName('');
    setNumber('');
  };

  return (
    <form className={css['form-container']} onSubmit={handleSubmit}>
      <Input
        inputClass={css['name-input']}
        labelClass={css['name-label']}
        type="text"
        label="Name"
        inputName="name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <Input
        inputClass={css['tel-input']}
        labelClass={css['tel-label']}
        type="tel"
        label="Number"
        inputName="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        required
      />
      <button className={css['button']} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
