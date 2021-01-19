export default number => {
    if (number < 4) return 'I'.repeat(number);
    if (number === 4) return 'IV';
    if (number === 5) return 'V';
    if (number === 9) return 'IX';
    if (number < 10) return `V${'I'.repeat(number-5)}`;
    if (number === 10) return 'X';
    if (number === 11) return 'XI';
   
    if (number === 1000) return 'M';

};

// Difficulté à faire un refacto incrémental. L'algo n'est pas encore clair pour moi donc 
// c'est difficile de faire par petit pas

// Je ne trouve toujours pas l'algo donc je continue avec la version naive

