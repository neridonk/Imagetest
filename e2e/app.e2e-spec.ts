import { JikanPage } from './app.po';

describe('jikan App', function() {
  let page: JikanPage;

  beforeEach(() => {
    page = new JikanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
