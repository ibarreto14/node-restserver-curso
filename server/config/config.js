
// =======================================
// PUERTO NODE
// =======================================
process.env.PORT = process.env.PORT || 3000;

// =======================================
// ENTORNO
// =======================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =======================================
// DB
// =======================================
let urlDB;

if(process.env.NODE_ENV === 'dev'){
	urlDB = 'mongodb://localhost:27017/cafe';
}else{
	urlDB = 'mongodb://cafe-user:m13ntr4s@ds153705.mlab.com:53705/cafe';
}

process.env.URLDB = urlDB;