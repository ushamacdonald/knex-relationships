
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 88801, url: 'www.test.com' , image: 'http://via.placeholder.com/140x100', user_id: 99901},
        {id: 88802, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99902},
        {id: 88803, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99903},
        {id: 88804, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99904},
        {id: 88805, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99905},
        {id: 88806, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99906},
        {id: 88807, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99907},
        {id: 88808, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99908},
        {id: 88809, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99909},
        {id: 88810, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99910},
        {id: 88811, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99911},
        {id: 88812, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99912},
        {id: 88813, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99913},
        {id: 88814, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99914},
        {id: 88815, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99915},
        {id: 88816, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99916},
        {id: 88817, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99917},
        {id: 88818, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99918},
        {id: 88819, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99919},
        {id: 88820, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99920},
        {id: 88821, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99921},
        {id: 88822, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99922},
        {id: 88823, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99923},
        {id: 88824, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99924},
        {id: 88825, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99925},
        {id: 88826, url: 'www.test.com', image: 'http://via.placeholder.com/140x100', user_id:99926},
      ]);
    });
};
