class Persona{
    static contadorPersonas = 0;
    email = String('Valor default email');

    static get MAX_OBJ (){
        return 5;

    }
    constructor (nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersonas < Persona.MAX_OBJ)
        this.idPersona= ++Persona.contadorPersonas;
    else 
    console.log('Se ha creado a una nueva persona');
} 
get nombre (){
    return this._nombre;
}
get apellido(){
    return this._apellido;
}
set nombre(nombre){
    this._nombre=nombre;
}
set apellido(apellido){
    this._apellido=apellido;
}
nombreCompleto(){
    return `${this.idPersona} ${this._nombre} ${this._apellido}`
    
}
toString(){
    return this.nombreCompleto();
}
}
Persona1= new Persona ('Laura', 'Lopez');
console.log(Persona1.toString())

Persona2= new Persona ('Lisari', 'Cordoba');
console.log(Persona2.toString())


 class Empleado extends Persona(){
    constructor (nombre, apellido, cargo){
        super(nombre, apellido);
        this._cargo= cargo;
    }
    get cargo(){
        return this._cargo;
    }
    set cargo(cargo){
        this._cargo=cargo;
    }
    nombreCompleto(){
        return `${super.nombreCompleto()} ${this._cargo}`
        
    }
 }
    empleado1 = new Empleado ('Laura', 'Lopez', 'Ingenieria de sistemas'); 
    empleado2 = new empleado ('Lisari', 'Cordoba', 'Gastronomia');
    empleado3 = new empleado ('Andres', 'Ruiz', 'Derecho');
    empleado4 = new empleado ('Deisy','Moreno','Psicologia');
    empleado5 = new empleado ('Shirley', 'Cruz', 'Contaduria');
    empleado6 = new empleado ('Danna', 'Verdugo', 'Veterenaria');

    console.log(empleado1.toString())
    console.log(empleado2)

