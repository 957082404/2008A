let mysql =require('mysql')			//引入模块

//设置连接参数
let connection=mysql.createConnection({
	host:'127.0.0.1',
	user:'root',
	password:'root',
	database:'sys'
});
// 创建链接
connection.connect();
// 执行query
connection.query('SELECT user_id FROM p_users limit 10', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
 
connection.end();
