
let catalogs =  [
    {
        "code": "6",
        "name": "Ama de casa",
        "description": null,
        "englishName": null,
        "type": null,
        "qualification": null,
        "subCatalogs": null
    },
    {
        "code": "2",
        "name": "Asalariado(a) - Empresa Privada",
        "description": null,
        "englishName": null,
        "type": null,
        "qualification": null,
        "subCatalogs": null
    },
    {
        "code": "1",
        "name": "Asalariado(a) - Empresa Pública",
        "description": null,
        "englishName": null,
        "type": null,
        "qualification": null,
        "subCatalogs": null
    },
    {
        "code": "5",
        "name": "Empleado(a) doméstico(a)",
        "description": null,
        "englishName": null,
        "type": null,
        "qualification": null,
        "subCatalogs": null
    },
    {
        "code": "7",
        "name": "Estudiante",
        "description": null,
        "englishName": null,
        "type": null,
        "qualification": null,
        "subCatalogs": null
    },
    {
        "code": "3",
        "name": "Independiente / Emprendedor(a)",
        "description": null,
        "englishName": null,
        "type": null,
        "qualification": null,
        "subCatalogs": null
    },
    {
        "code": "4",
        "name": "Jubilado(a)",
        "description": null,
        "englishName": null,
        "type": null,
        "qualification": null,
        "subCatalogs": null
    },
    {
        "code": "8",
        "name": "Sin empleo",
        "description": null,
        "englishName": null,
        "type": null,
        "qualification": null,
        "subCatalogs": null
    }
]
const sortByCode = (arr: any[]) => {
    const hasUndefined = arr.some(item => item.code === undefined);
    
    if (hasUndefined) {
        return arr;
    }

    return arr.sort((a, b) => a.code!.localeCompare(b.code!, undefined, { numeric: true }))
}

console.log(sortByCode(catalogs))