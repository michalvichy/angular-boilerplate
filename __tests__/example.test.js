import AppController from './../src/components/AppComponent/app.controller';

test('AppController example test', () => {
  const controller = new AppController();

  expect(controller.init).toBe(true);
});
