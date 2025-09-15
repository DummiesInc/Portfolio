import linkedIn from './contacts/linkedin.svg';
import email from './contacts/email.svg';
import github from './contacts/github.svg';

export interface Contact {
  name: string;
  svg: any;
  url: string;
}

export const contacts: Contact[] = [
  {
    name: 'LinkedIn',
    svg: linkedIn,
    url: ''
  },
  {
    name: 'Github',
    svg: github,
    url: ''
  },
  {
    name: 'Email',
    svg: email,
    url: ''
  }
];
