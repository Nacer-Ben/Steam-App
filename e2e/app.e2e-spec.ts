import { SteamAppPage } from './app.po';

describe('steam-app App', function() {
  let page: SteamAppPage;

  beforeEach(() => {
    page = new SteamAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
