const connection = require ("./connection");
const { connect } = require("./connection");

// sqlFuntions = {
//      selectAll: function (){

//      },
//      insertOne: function (){
          
//      },
//      updateOne: function (){
          
//      }
// }
function selectAll(){
connection.query('SELECT * FROM burgers', (err,rows) => {
     if(err) throw err;
   
     console.log('Data received from Db:');
     console.log(rows);
   });
}
     //  module.exports(connection.query)
function insertOne(){

     let insert = `INSERT INTO burgers(burger_name, devoured)
     VALUES({{variable}}, false)`;

connection.query(insert)
connect.end

}
function updateOne(){
     let update = `UPDATE burgers SET completed = ? WHERE id = ?`;
     connection.query(update)
     connect.end
}


// connection.query('INSERT INTO burgers WHERE burger_name', (err,rows) => {

//      INSERT INTO authors (id, name, city)


//      if(err) throw err;
   
//      console.log('Data received from Db:');
//      console.log(rows);
//    });