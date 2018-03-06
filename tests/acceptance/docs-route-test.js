import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Docs route test');

test('the docs route renders', function(assert) {
  visit('/docs');

  andThen(function() {
    assert.equal(currentURL(), '/docs');
  });
});

// Todo: Bring this test back once we finish up the API docs pages
test('I can visit an autogenerated docs route', function(assert) {
  visit('/docs');
  click('[data-test-id="nav-item"]:contains({{docs-hero}})');

  andThen(function() {
    assert.ok(find('h1:contains(DocsHero)').length);
  });
});