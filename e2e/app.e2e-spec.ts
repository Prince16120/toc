import { TocPage } from './app.po';

describe('toc App', () => {
  let page: TocPage;

  beforeEach(() => {
    page = new TocPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
