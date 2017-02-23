import { GitGrubAppPage } from './app.po';

describe('git-grub-app App', () => {
  let page: GitGrubAppPage;

  beforeEach(() => {
    page = new GitGrubAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
