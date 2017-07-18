
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getProfile: getProfile
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users')
    .where('id', id)
}

function getProfile (id, connection) {
  return connection('profiles')
    .where('profiles.user_id', id)
    .join('users', 'user_id', '=', 'users.id')
}
