module.exports = getUserById = (req, res)=>{
	const {id} = req.params
	res.status(200).send(`Acá el usuario por ${id}`)
}
