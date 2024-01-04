
export async function appFetch(url, { method = 'GET', body } = {}) {
  const res = await fetch(`https://veva.albison.software/api${url}`, { method, body: JSON.stringify(body) })
  return await res.json()
}
