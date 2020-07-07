const connection = require ("./connection");
const { connect } = require("./connection");

sqlFuntions = {
     selectAll: function(){
          connection.query('SELECT * FROM burgers', (err,rows) => {
               if(err) throw err; 
               console.log('Data received from Db:');
               console.log(rows);
             });
          },
          insertOne: function(){      
               let insert = `INSERT INTO burgers(burger_name, devoured)
               VALUES({{variable}}, false)`;
          
          connection.query(insert)
          connect.end
          
          },
          updateOne: function(){
               let update = `UPDATE burgers SET completed = ? WHERE id = ?`;
               connection.query(update)
               connect.end
          }
          
}


