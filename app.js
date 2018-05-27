
let age = prompt('Ingrese su edad');

if ( age >= 1 && age <= 2) {
    document.write("<div>" + age + " años" +  " = Toddler: Durante este tiempo, su crecimiento físico y desarrollo motor se ralentizarán, pero puede esperar ver cambios tremendos como intelectuales, sociales y emocionales </div>");
    
    alert('Perteneces a Toddler');
}

if (age >= 3 && age <= 4){
    document.write("<div>" + age + " años" + " = Preschool: Durante este tiempo, su crecimiento físico y desarrollo motor se ralentizarán, pero puede esperar ver cambios tremendos como intelectuales, sociales y emocionales </div>");
    alert('Perteneces a Preschool')
}
if (age >=5 && age <=11){
    document.write("<div>"  + age + " años" + " = Gradeschooler: Su hijo debe tener confianza en su capacidad para enfrentar los desafíos en su vida. Este sentido de poder personal evoluciona a partir de tener experiencias de vida exitosas en la resolución de problemas de forma independiente, ser creativo y obtener resultados por sus esfuerzos </div>");
    alert('Perteneces a Gradeschooler')
}

if (age >=12 && age <= 17){
    document.write("<div>" + age + " años" + " = Teen: La adolescencia puede ser un desafío para los padres. Su hijo a veces puede ser una fuente de frustración y exasperación, por no mencionar el estrés financiero. Pero estos años también traen muchos, muchos momentos de alegría, orgullo, risa y cercanía.</div>");
    alert('Perteneces a Teen')
}

if(age >=18 && age <= 20){
    document.write("<div>" + age + " años" + " = Young Adult: Un adulto joven que se va a una universidad o un trabajo lejos de casa tiene que construir un sistema de apoyo social desde cero. Al mismo tiempo, puede tener que aclimatarse a un entorno drásticamente diferente</div>");
    alert('Perteneces a Young Adult')
}
