import { MiMQIPUIPage } from './app.po';

describe('mi-mqip-ui App', () => {
  let page: MiMQIPUIPage;

  beforeEach(() => {
    page = new MiMQIPUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
