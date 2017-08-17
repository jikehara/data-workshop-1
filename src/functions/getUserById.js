const getUserById = (data, id) => {
  if (data == null || data.users == null || id == null) {
    return null
  }
  for (let i = 0; i < data.users.length; i += 1) {
    if (data.users[i].id === id) {
      return data.users[i]
    }
  }
  // return data.users.find((u) => u.id === id) // does the same thing ^
}

export default getUserById
