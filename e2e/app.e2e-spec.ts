import { StayhealthyworldPage } from './app.po';

describe('stayhealthyworld App', function() {
  let page: StayhealthyworldPage;

  beforeEach(() => {
    page = new StayhealthyworldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
