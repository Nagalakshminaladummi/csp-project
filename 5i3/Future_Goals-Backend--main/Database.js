const oracledb = require("oracledb");
// Set database connection details
const dbConfig = {
  user: "system",
  password: "manager",
  connectString: "localhost:/orcl",
};

const Query = async (sql) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(sql);
    await connection.commit();
    return result;
  } catch (error) {
    return (error);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error(error);
      }
    }
  }
};

// ------------  feedback  -----------------

const Result = async (...Parameters) => {

  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
  // try{
  //   Details = eval(`(${Parameters[2]})`);
  // } catch(err){}
  switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.username}','${Details.suggestion}','${Details.quires}','${Details.experience}','${Details.rating}')`;
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set username = '${Parameters[3].username}', suggestion = '${Parameters[3].suggestion}', quires = '${Parameters[3].quires}',experience = '${Parameters[3].experience}',rating = '${Parameters[3].rating}' where username = '${Details}'`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where username = '${Details}'`;
      break;
      case "Read":

      Sql = `select * from ${Parameters[0]} `;
      if (Details != "All") {
        Sql = `select * from ${Parameters[0]} where username = '${Details}'`;
      }

      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  return result;
};


// ---------------  Login  ----------------------------------

const Login = async (...Parameters) => {

  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
  try {
    Details = eval(`(${Parameters[2]})`);
  } catch (err) { }
  switch (Parameters[1]) {
    case "Read":
      Sql = `select mail,password from ${Parameters[0]} `;
      if (Details != "All") {
        Sql = `select * from ${Parameters[0]} where mail = '${Details}'`;
      }
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  return result;
};


// --------------   register ------------------

const register = async (...Parameters) => {

  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];

  switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.name}','${Details.mail}','${Details.password}','${Details.birth}','${Details.phonenumber}')`;
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set name = '${Parameters[3].name}', password = '${Parameters[3].password}' where name = '${Details}'`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where name = '${Details}'`;
      break;
    case "Read":
      
        Sql = `select mail,password from ${Parameters[0]} where mail = '${Details}'`;
      
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  return result;
};

// --------------contact -------------------------

const contact = async (...Parameters) => {

  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
  try {
    Details = eval(`(${Parameters[2]})`);
  } catch (err) { }
  switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.name}','${Details.email}','${Details.phonenumber}','${Details.message}')`;
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set name = '${Parameters[3].name}', email = '${Parameters[3].email}', phonenumber = '${Parameters[3].phonenumber}', message = '${Parameters[3].message}' where name = '${Details}'`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where name = '${Details}'`;
      break;
    case "Read":
      Sql = `select * from ${Parameters[0]} `;
      if (Details != "All") {
        Sql = `select * from ${Parameters[0]} where name = '${Details}'`;
      }
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  return result;
};
//--------------------------inter--------------------------------


const inter = async (...Parameters) => {

  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
  try {
    Details = eval(`(${Parameters[2]})`);
  } catch (err) { }
  switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.coursename}','${Details.duration}','${Details.elgibility}','${Details.fee}')`;
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set coursename = '${Parameters[3].coursename}', duration = '${Parameters[3].duration}', elgibility= '${Parameters[3].elgibility}', fee = '${Parameters[3].fee}' where coursename = '${Details}'`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where coursename = '${Details}'`;
      break;
    case "Read":

      Sql = `select * from ${Parameters[0]} `;
      if (Details != "All") {
        Sql = `select * from ${Parameters[0]} where coursename = '${Details}'`;
      }

      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  return result;
};


//---------------------------btech----------------------------
const btech = async (...Parameters) => {

  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
  try {
    Details = eval(`(${Parameters[2]})`);
  } catch (err) { }
  switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.coursename}','${Details.duration}','${Details.elgibility}','${Details.fee}')`;
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set coursename = '${Parameters[3].coursename}', duration = '${Parameters[3].duration}', elgibility= '${Parameters[3].elgibility}', fee = '${Parameters[3].fee}' where coursename = '${Details}'`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where coursename = '${Details}'`;
      break;
    case "Read":

      Sql = `select * from ${Parameters[0]} `;
      if (Details != "All") {
        Sql = `select * from ${Parameters[0]} where coursename = '${Details}'`;
      }

      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  return result;
};
//---------------------adminreg------------------------------
const adminreg = async (...Parameters) => {

  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];

  switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.name}','${Details.mail}','${Details.password}','${Details.birth}','${Details.phonenumber}')`;
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set name = '${Parameters[3].name}', password = '${Parameters[3].password}' where name = '${Details}'`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where name = '${Details}'`;
      break;
    case "Read":
      
        Sql = `select mail,password from ${Parameters[0]} where mail = '${Details}'`;
      
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  return result;
};

// -----------------------------adminlogin-------------------------
const adminlogin = async (...Parameters) => {

  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
  try {
    Details = eval(`(${Parameters[2]})`);
  } catch (err) { }
  switch (Parameters[1]) {
    case "Read":
      Sql = `select mail,password from ${Parameters[0]} `;
      if (Details != "All") {
        Sql = `select * from ${Parameters[0]} where mail = '${Details}'`;
      }
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  return result;
};
//-------------------------------courses-----------------------------------------------------

const courses = async (...Parameters) => {

  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
  // try {
  //   Details = eval(`(${Parameters[2]})`);
  // } catch (err) { }
  switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.course_name}','${Details.course_elgibility}','${Details.course_duration}')`;
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set coursename = '${Parameters[3].course_name}', duration = '${Parameters[3].course_elgibility}', elgibility= '${Parameters[3].course_duration}',  where course_name = '${Details}'`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where course_name = '${Details}'`;
      break;
    case "Read":

      Sql = `select * from ${Parameters[0]} `;
      if (Details != "All") {
        Sql = `select * from ${Parameters[0]} where course_name = '${Details}'`;
      }

      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  return result;
};


module.exports = {
  Result: Result,
  Login: Login,
  register: register,
  contact: contact,
  inter: inter,
  btech: btech,
  adminreg:adminreg,
  adminlogin:adminlogin,
  courses:courses,

};
