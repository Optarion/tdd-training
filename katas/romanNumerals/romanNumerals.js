export default number => {
    if (number < 4) return 'I'.repeat(number);
    if (number === 4) return 'IV';
    if (number === 5) return 'V';
    if (number === 5) return 'V';
   
    if (number === 1000) return 'M';

};

// Difficulté à faire un refacto incrémental. L'algo n'est pas encore clair pour moi donc 
// c'est difficile de faire par petit pas

