class Base {
  constructor(client) {
    this.client = client;
    this.elements = {
      logoElement: '//*[@id="hplogo"]',
      searchElement: '//*[@id="tsf"]/div/div/div/*/*/input'
    };
  }

  navigateToGoogle(url) {
    const { client, elements } = this;
    const { logoElement, searchElement } = elements;

    client.url(url)
      .waitForElementVisible(logoElement)
      .waitForElementVisible(searchElement);
  }
}

export default Base;
