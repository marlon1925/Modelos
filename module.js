// module.exports.login = (username,password)=>{
//     if(username === null && password === null) 
//     return console.log("You are not autorized")
//     console.log(`Bienvenido ${username}`)
// }

// module.exports.cuenta = () => {
//     console.log("Cuenta de ahorros ")
//     console.log("Saldo actual: 0.01$")
// }

export const libro = () => {
    const datosLibro = ["IT", "Stephen King", 1986, "Novela de terror", ["Terror", "Suspenso", "Ficción"]]

    const [titulo, autor, anio, genero, etiqueta] = datosLibro;

    console.log("Titulo: ", titulo);
    console.log("Autor: ", autor);
    console.log("Año: ", anio);
    console.log("Genero: ", genero);
    console.log("Etiqueta: ", etiqueta);
}

export const autos = () => {
    console.log("Carros americanos URGENTITTO");
    const marcasAutos = ["Toyota", "Nissan", "Swm", ["Tesla", "Ford"]];

    const [, , , [americano1, americano2]] = marcasAutos;

    console.log(americano1);
    console.log(americano2);
}