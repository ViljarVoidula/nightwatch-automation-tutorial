import Base from './Base.class';

class Search extends Base {
  constructor(client) {
    super();
    this.client = client;
    this.elements = Object.assign({
      searchButton: '//*[@id="tsf"]/div/div/div/div/div/center/input[1]',
      resultsPanel: '//*[@id="search"]'
    }, this.elements)
  }

  searchTerm(searchTerm) {
    const { elements, client } = this;
    const { searchElement, resultsPanel } = elements;
    client.click(searchElement)
      .setValue(searchElement, searchTerm)
      .keys(client.Keys.ENTER)
      .waitForElementVisible(resultsPanel)
     
  }
}

export default Search;
