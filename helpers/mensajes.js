const { resolve } = require('path');

require('colors');


const mostrarMenu = ()=>{

return new Promise(resolve =>{
    console.clear();

console.log('==============================='.green);
console.log(' Seleccione una opción'.green);
console.log('===============================\n'.green);
console.log(`${'1.'.green} Crear Tarea`);
console.log(`${'2.'.green} Listar Tareas`);
console.log(`${'3.'.green} Listar Tareas completadas`);
console.log(`${'4.'.green} Listar Tareas Pedientes`);
console.log(`${'5.'.green} Completar Tarea(s)`);
console.log(`${'6.'.green} Borrar Tarea`);
console.log(`${'0.'.green} Salir \n`);

const readline =require('readline').createInterface({
   input:process.stdin,
   output: process.stdout 
});
readline.question('Selecione una opcion:', (opt) =>{
//console.log({opt});
readline.close();
resolve(opt);
})

});


}

const pausa = () =>{
    return new Promise(resolve =>{
        const readline =require('readline').createInterface({
            input: process.stdin,
            output:process.stdout
        });
        readline.question(`\n Presione ${'Enter'.blue} para continuar`,(opt)=>{
           // console.log({opt});
            readline.close();
            resolve();//no se retorna nada por que no interesa ok
        })

    });
    
}

module.exports = {
    mostrarMenu,
    pausa
}



