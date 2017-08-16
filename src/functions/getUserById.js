export default (data, id) => {
  if (data == null || data.users == null || id == null) return null

  return data.users.find(u => u.id === id)
}
