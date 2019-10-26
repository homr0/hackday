const dna = ["A", "C", "G", "T"];

const asciiDNA = input => {
  let dnaStr = "";

  console.log(`Original String: ${input}`);
  for (let i = 0; i < input.length; i++) {
    console.log(`Char: ${input.charAt(i)}`);
    let charCode = input.charCodeAt(i);
    console.log(`Char code: ${charCode}`);
    charCode = parseInt(charCode).toString(4);
    console.log(`Base 4: ${charCode}`);

    let dnaFrag = "";

    for (let j = 0; j < charCode.length; j++) {
      dnaFrag += dna[parseInt(charCode.charAt(j))];
    }

    while (dnaFrag.length < 4) {
      dnaFrag = dna[0] + dnaFrag;
    }

    dnaStr += dnaFrag;
  }
  console.log(`DNA String: ${dnaStr}`);
}

asciiDNA("aAbB");