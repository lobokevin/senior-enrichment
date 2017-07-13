const db = require('./db/index.js');
const Student = require('./db/models/student');
const Campus = require('./db/models/campus');

const students = [
  { name: 'Kevin Lobo', email: 'klobo@ilstu.edu', campusId: 1},
  { name: 'Tom', email: 'kobo@ilstu.edu', campusId: 2 },
  { name: 'Dick', email: 'kloo@ilstu.edu', campusId: 3},
  { name: 'Harry', email: 'obo@ilstu.edu', campusId: 1}
];

const campuses = [
  { name: 'Titan' },
  { name: 'Tera'},
  { name: 'Luna'},
  { name: 'Mars'}
];

const seed = () =>
Promise.all(campuses.map(campus =>
  Campus.create(campus))
  )
  .then(() =>
  Promise.all(students.map(student =>
    Student.create(student))
  ));

const main = () => {
  console.log('Syncing db...');
  db.didSync
  .then(function(){
    console.log('Synced');
    return seed();
  })
  .then(function(){
    db.close();
  })
  .catch(err => {
    console.log(err.stack);
  })


  // db.sync({ force: false })
  //   .then(() => {
  //     console.log('Seeding databse...');
  //     return seed();
  //   })
  //   .catch(err => {
  //     console.log('Error while seeding');
  //     console.log(err.stack);
  //   })
  //   .then(() => {
  //     db.close();
  //     return null;
  //   });
};

main();
