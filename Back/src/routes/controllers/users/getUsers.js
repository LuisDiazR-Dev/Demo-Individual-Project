module.exports = getUsers = (req, res)=>{
	
	// http://localhost:3001/demo/users?name="luis"
	const {name} = req.query

	name 
	? res.status(200).send(`Acá están todos los usuarios de nombre ${name}`)
	: res.status(200).send('Acá están todos los usuarios')
	
}

	// if (age) res.status(200).send(`Acá están todos los usuarios de edad ${age}`)