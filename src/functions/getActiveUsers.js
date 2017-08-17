const getActiveUsers = (data) => {
  if (data == null || data.users == null) {
    return null
  } else {
    return data.users.filter((u) => u.accountActive === true)
  }
}

export default getActiveUsers
