//  Array for DNA number to equivalent character
const dna = ["A", "C", "G", "T"];

//  Array for RNA number to equivalent character
const rna = ["A", "C", "G", "U"];

const asciiDna = (input, isRNA = false) => {
  let dnaStr = "";

  for (let i = 0; i < input.length; i++) {
    //  Gets the character code at the input index
    let charCode =  input.charCodeAt(i);

    //  Gets the Base 4 of the ASCII
    charCode = parseInt(charCode).toString(4);

    let dnaFrag = "";
    
    //  Gets the DNA letters for each ASCII base-4 number
    for (let j = 0; j < charCode.length; j++) {
      (isRNA) 
      ? dnaFrag += rna[parseInt(charCode.charAt(j))]
      : dnaFrag += dna[parseInt(charCode.charAt(j))];
    }

    //  Makes sure that the DNA fragment is of length 4
    while (dnaFrag.length < 4) {
      (isRNA)
      ? dnaFrag = rna[0] + dnaFrag
      : dnaFrag = dna[0] + dnaFrag;
    }

    dnaStr += dnaFrag;
  }

  return dnaStr;
};

module.exports = asciiDna;