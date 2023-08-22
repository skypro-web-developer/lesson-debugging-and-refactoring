const assert = require("assert").strict;
const { between } = require('./2-module');

{
  const line = "John Doe <jdoe@mail.com>";
  const email = between(line, "<>");
  const expected = "jdoe@mail.com";
  assert.equal(email, expected);
}

{
  const line = "John Doe email is jdoe@mail.com";
  const email = between(line, "<>");
  const expected = "";
  assert.equal(email, expected);
}

{
  const line = "John Doe email is <>";
  const email = between(line, "<>");
  const expected = "";
  assert.equal(email, expected);
}

{
  const line = "John Doe >jdoe@mail.com<";
  const email = between(line, "<>");
  const expected = "";
  assert.equal(email, expected);
}
