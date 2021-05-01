const db = require('../config/config');

module.exports = class Courses {
  constructor (id, name){
      this.id = id;
      this.name = name;
  }


  //Fetch data from database
  static fetchAll(){
      return db.execute('SELECT * FROM courses');
  }

  //Post data to the database
  static post(name){
      return db.execute('INSERT INTO courses (name) VALUES (?)', [name]);
  }

  static update(id, name){
      return db.execute('UPDATE courses SET name = ? WHERE id = ?', [name, id]);
  }

  static delete(id){
      return db.execute('DELETE  FROM courses WHERE id = ?', [id])
  }
}
