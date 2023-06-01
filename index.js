import cellphone from "./src/utils/celular.js"

function cellphoneDescription ({
	name,
	brand,
	dimensions,
	weight,
	color,
	year,
}) {
	return `${brand} ${name} del año ${year}, es un smartphone ligero y limpio, con un peso de tan sólo ${weight} gramos y con unas dimensiones de ${dimensions}cms. Está presente en un hermoso color ${color}.`
}

const loadInfo = () => {
	const newModel = structuredClone(cellphone)
	newModel.name = "Pixel 8A SuperPro"
	newModel.color = "Rojo Pasión"

	setTimeout(() => {
		// PRINT AFTER 2 SECONDS
		console.log(cellphoneDescription(cellphone))
	}, 2000)
	// PRINT FIRST
	console.log(cellphoneDescription(newModel))
}

loadInfo()
