// Funcion consulta si es Ingreso o Egreso

function iniciarRegistro() {
    let ingresos = [];
    let egresos = [];
    let continuar = true;


    while (continuar) {

        const tipo = prompt("Que operacion queres realizar? Tipea ingreso para Ingresos, egreso para Egresos o Fin para Calcular la Ganancia ").toLowerCase();

        if (tipo === `ingreso`) {
            ingresos = ingresos.concat(ingresarIngresos());

        } else if (tipo === `egreso`) {
            egresos = egresos.concat(ingresarEgresos());

        }
        else if (tipo === `fin`) {
            continuar = false;
        } else {
            alert("Opcion incorrecta, por favor coloca Ingreso, Egreso o Fin.");
        }
    }
    calcularGanancia(ingresos, egresos);
}



// Funcion Ingresos

function ingresarIngresos() {
    let ingresos = [];
    let continuar = true;

    while (continuar === true) {
        const motivo = prompt("Coloca el motivo del Ingreso de dinero, ej: Servicio Tecnico");
        const monto = parseFloat(prompt("Coloca el Monto a Ingresar, ej: 830.75"));

        if (isNaN(monto) || monto <= 0) {
            alert("Por favor ingresa un monto positivo");
            continue;
        }

        ingresos.push({ motivo: motivo, monto: monto });

        const respuesta = prompt("Queres ingresar otro ingreso? Si/No").toLowerCase();
        if (respuesta === "si") {
            continuar = true;
            if (respuesta === "no") {
                iniciarRegistro;
            }
        } else {
            continuar = false;
        }

    }
    console.log("Ingresos ingresados:");
    ingresos.forEach((ingreso, index) => {
        console.log(`Ingreso ${index + 1}: Motivo: ${ingreso.motivo}, Monto: ${ingreso.monto.toFixed(2)} $`);
    });

    return ingresos;
}

// Funcion Egresos

function ingresarEgresos() {
    let egresos = [];
    let continuar = true;

    while (continuar === true) {
        const motivo = prompt("Coloca el motivo del Egreso de dinero, ej: Panaderia");
        const monto = parseFloat(prompt("Coloca el Monto del Egreso, ej: 830.75"));

        if (isNaN(monto) || monto <= 0) {
            alert("Por favor ingresa un monto positivo");
            continue;
        }

        egresos.push({ motivo: motivo, monto: monto });

        const respuesta = prompt("Queres ingresar otro egreso? Si/No").toLowerCase();
        if (respuesta === "si") {
            continuar = true;
        } else {
            continuar = false;
        }

    }
    console.log("Egresos ingresados:");
    egresos.forEach((egreso, index) => {
        console.log(`Egreso ${index + 1}: Motivo: ${egreso.motivo}, Monto: ${egreso.monto.toFixed(2)} $`);
    })

    return egresos;
}

// Calcular el promedio de los ingresos/egreso (Ganancia)

function calcularGanancia(ingresos, egresos) {
    const totalIngresos = ingresos.reduce((total, ingreso) => total + ingreso.monto, 0);
    const totalEgresos = egresos.reduce((total, egreso) => total + egreso.monto, 0);
    const saldoNeto = totalIngresos - totalEgresos;

    console.log(`Total de Ingresos: ${totalIngresos.toFixed(2)} $`);
    console.log(`Total de Egresos: ${totalEgresos.toFixed(2)} $`);
    console.log(`Ganancia: ${saldoNeto.toFixed(2)} $`);

}

// *** FIN ***