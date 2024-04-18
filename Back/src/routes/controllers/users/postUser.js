module.exports = createUser = (req, res)=>{
	
	// ? se envía un json por body 
	// {
	// 	"name":"luis",
	// 	"age":32,
	// 	"email":"ejemplo@ejemplo.com"
	// }
	
	const {name, age, email}=req.body
	
	name && age && email
	? res.status(200).send(`creado el usuario ${name}`)
	: res.status(200).send('no se pudo crear usuario')
}
