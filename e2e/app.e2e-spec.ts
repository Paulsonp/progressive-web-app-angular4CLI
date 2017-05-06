import { MyDemoPwaPage } from './app.po';

describe('my-demo-pwa App', () => {
  let page: MyDemoPwaPage;

  beforeEach(() => {
    page = new MyDemoPwaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
