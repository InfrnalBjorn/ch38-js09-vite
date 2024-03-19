import { palindromo } from "../src/js/palindromo";
test("Palindromo de 3 letras", () => {
  expect(palindromo("ana")).toBe(true);
  expect(palindromo("ala")).toBeTruthy();
  expect(palindromo("oso")).toBeTruthy();
  expect(palindromo("Bob")).toBeTruthy();
  expect(palindromo("Somos o no somos")).toBeTruthy();
});

test("No palindromo de 3 letras", () => {
  expect(palindromo("ola")).toBe(false);
  expect(palindromo("amo")).toBeFalsy();
  expect(palindromo("leo")).toBeFalsy();
});