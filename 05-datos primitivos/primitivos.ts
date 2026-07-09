let estudiaste_javascript:boolean | number | undefined=true;

if(estudiaste_javascript)console.log('Puedes seguir')
else{console.log('No puedes seguir con esto')}

let interMiami:number=11;
let fDallas:number=11;
let messi:number=1
let juegaMessi:boolean=true;

function jugar(equipo1:number,equipo2:number,juegaMessi:boolean,jugador:number):void{
    if(juegaMessi)equipo1+1
    if(equipo1>equipo2)console.log('Gana iMiami')
    if(equipo1===equipo2)console.log('Empate')
    if(equipo1<equipo2)console.log('Empate')
}

jugar(interMiami,fDallas,juegaMessi,messi)