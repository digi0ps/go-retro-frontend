async function putData(name) {
  const res = await fetch('http://localhost:5555/api/board', {
    method: 'PUT',
    body: JSON.stringify(name),
  })
  const data = await res.json()
  return data
}

export default putData
