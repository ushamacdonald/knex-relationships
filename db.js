
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getProfile: getProfile,
  newUser: newUser
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

function newUser (data, connection) {
  var insertUser = {name: data.name, email: data.email}
  return connection('users').insert(insertUser)
    .then(function(userId) {
      var insertProfile = {url: data.url, image: data.image, user_id: userId[0] }
      return connection('profiles').insert(insertProfile)
    })
    .then(function (profile_id) {
      return connection('profiles')
        .where('id', profile_id[0])
        .first()
    })

}
