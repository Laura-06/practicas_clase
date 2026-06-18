class Persona{
    static contadorPersonas = 0;

    static get MAX_OBJ(){
        return 5;
    }

    static saludar(){
        console.log('Saludes desde el método estático');
    }

    static saludar2(persona){
        console.log(persona.nombre);
    }
}
    let persona1 = new Persona ('Lisari');
console.log(Persona.saludar());

