const saludar = (name) => {
    console.log(`hola ${name}`);
}

const despedir = (name) => {
    console.log(`adios ${name}`);
}

const saludarYDespedir = (name) => {
    saludar(name);
    despedir(name);
}