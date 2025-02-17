function dnaStrand(dna){
   let result=dna.split('').map(l => {
     switch (l) {
                    case 'A':
                        return 'T';
                    case 'T':
                        return 'A';
                    case 'C':
                        return 'G';
                    case 'G':
                        return 'C';
                }
            })
            return result.join('')
​
}