const fs = require('fs');

const requestLogger = (req, res, next)=> {
  const headers = req.headers;
  const userAgent = headers['user-agent'];

 	fs.appendFile('requestDump.log', `At ${new Date()} request, User Agents are => ${userAgent}\n`, (err)=>{
		if(err) throw err;
		console.log('data appended successfully');
	});	
  next();
}

module.exports = requestLogger;

