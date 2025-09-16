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
    url: 'https://www.linkedin.com/in/junfeng-ou-a359b41a4/'
  },
  {
    name: 'Github',
    svg: github,
    url: 'https://github.com/Junfengou'
  },
  {
    name: 'Email',
    svg: email,
    url: 'mailto:juntheworkingman@gmail.com'
  }
];
