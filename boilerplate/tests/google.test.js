import { Search } from '../pages';

export default {
  'User can search term from Google': client => {
    const pages = new Search(client);
    
    pages.navigateToGoogle('http://google.com');
    pages.searchTerm('Testing is fun');
  }

};
