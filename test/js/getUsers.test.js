import { getUsersUsignFetch, getUsersUsingAxios } from "../../src/js/getUsers";

const url = "https://reqres.in/api/users?page=2";
//const url = "../../public/json/users.json"

// Probar api Fetch
test("El array de Users no esta vació", async () => {
  const users = await getUsersUsignFetch(url);
  // Verificar si es un array
  expect(Array.isArray(users)).toBe(true);

  // Verificar que no está vacío
  expect(users.length).toBeGreaterThan(0);
});
