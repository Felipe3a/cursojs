const idade = 70;     

if (idade <16 || idade > 65) {
   console.log(`Você tem ${idade} anos, e não pode votar!`);    
}
else if (idade <18) {
        console.log(`Você tem ${idade} anos, e seu voto e facultativo!`);
    }
    else{
      
        console.log(`Você tem ${idade} anos, e seu Voto é obrigatório!`);
    }
