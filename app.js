
let age = prompt('Ingrese su edad');

if ( age >= 1 && age <= 2) {
    document.write("<div>" + age + " años" +  " =  Estas en la Etapa : Toddler</div>");
    
    alert('Perteneces a Toddler');
} else if (age >= 3 && age <= 4){
    document.write("<div>" + age + " años" + " = Estas en la Etapa : Preschool</div>");
    alert('Perteneces a Preschool')

} else if (age >=5 && age <=11){
    document.write("<div>"  + age + " años" + " = Estas en la Etapa :  Gradeschooler</div>");
    alert('Perteneces a Gradeschooler')

} else if (age >=12 && age <= 17){
    document.write("<div>" + age + " años" + " = Estas en la Etapa : Teen.</div>");
    alert('Perteneces a Teen')

} else if (age >=18 && age <= 20){
    document.write("<div>" + age + " años" + " = Estas en la Etapa : Young Adult: Un adulto joven que se va a una universidad o un trabajo lejos de casa tiene que construir un sistema de apoyo social desde cero. Al mismo tiempo, puede tener que aclimatarse a un entorno drásticamente diferente</div>");
    alert('Perteneces a Young Adult')

} else if (age >=21){
    document.write("<div>" + age + " años" + " = Estas en la Etapa : Adult </div>");
    alert('Pertences a Adult')
} else {
    document.write("<div>" + age + " = Ingrese su edad en numero </div>");
    alert('ingrese su edad en numero')
}

