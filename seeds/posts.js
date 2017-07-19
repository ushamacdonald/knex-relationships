
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, title: 'My first day at EDA', content: 'We got to EDA and i was so nervous. All my cohort is so lovely and kind. I really enjoy functional programming so far, but am excited to learn about object oriented programming also.', user_id: 99914},
        {id: 2, title: 'Cricket', content: 'I really love cricket. It is all i think about. There are a great many reasons to love cricket. You can play forward defence, back foot defence and a mix of the two.', user_id: 99901},
        {id: 3, title: 'Knex', content: 'Knex is a plastic toy similar to lego. It is also a a batteries included SQL query builder for postgres, MSSQL and SQLite3. It is portable flexible and fun to use.', user_id: 99922 }
      ]);
    });
};
