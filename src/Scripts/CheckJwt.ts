export default async function JwtCheck() {
  const result = await fetch("http://localhost:3001/api/checkjwt", {
    method: "GET",
    credentials: "include",
  });
  console.log(result);
  if (result.ok) {
    return await result.json();
  }
  return false;
}
