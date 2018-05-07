import { GitClonePage } from './app.po';

describe('git-clone App', () => {
  let page: GitClonePage;

  beforeEach(() => {
    page = new GitClonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
