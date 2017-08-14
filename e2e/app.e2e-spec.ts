import { RESOURCEplanPage } from './app.po';

describe('resourceplan App', () => {
  let page: RESOURCEplanPage;

  beforeEach(() => {
    page = new RESOURCEplanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
