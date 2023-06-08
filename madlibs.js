// PROBLEM
// Make a program that takes a text template as input, plugs in a
// selection of parts of speech, and returns the text.
//
// EXAMPLES
// function madlibs(template) {
  // ...
// }
// 
// // These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------
// 
// madlibs(template1);
// // The "sleepy" brown "cat" "noisily"
// // "licks" the "sleepy" yellow
// // "dog", who "lazily" "licks" his
// // "tail" and looks around.
// 
// madlibs(template1);
// // The "hungry" brown "cat" "lazily"
// // "licks" the "noisy" yellow
// // "dog", who "lazily" "licks" his
// // "leg" and looks around.
// 
// madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".
// 
// madlibs(template2);      // The "cat" "pats" the "cat"'s "head".
// 
// DATA STRUCTURE
// String with *noun*, *adjective*, *verb*, and *adverb* within
// it to be replaced using egex
//
// parts of speech object with properties corresponding to parts
// of speech and values which are words of that category
//
// ALGORITHM
// initialize a parts of speech object
// split template into words
// iterate over words, matching against iregex corresponding to *noun*, *adjective*,
//   *verb*, *adverb*
// replace each match with a random sample from corresponding part of speech,
//   using the parts of speech object
// return words after joining
//
// CODE

const template1 = `The *adjective* brown *noun* *adverb* *verb* the
                   *noun*, who *adverb* *verb* his *noun* and looks
                   around`

const template2 = `The *adjective* *adjective* *noun* *verb* *adverb*`

function madlibs(template) {
  const noun = /\*noun\*/;
  const adjective = /\*adjective\*/;
  const verb = /\*verb\*/;
  const adverb = /\*adverb\*/;

  const partsOfSpeech = {
    noun: ["dog", "cat", "bird", "fish", "housewife", "businessman"],
    adjective: ["fast", "calm", "distracted", "dishevelled", "crafty"],
    verb: ["walks", "eats", "irritates", "paints", "calibrates"],
    adverb: ["quickly", "furiously", "lazily", "slowly", "mindfully"],
  };

  let words = template.split(' ');
  
  words.forEach((word, index) => {
    if (word.match(noun)) {
      words[index] = replaceWith(partsOfSpeech.noun);
    } else if (word.match(adjective)) {
      words[index] = replaceWith(partsOfSpeech.adjective);
    } else if (word.match(verb)) {
      words[index] = replaceWith(partsOfSpeech.verb);
    } else if (word.match(adverb)) {
      words[index] = replaceWith(partsOfSpeech.adverb);
    }

  });
  
  return words.join(' ');
}

function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// takes an array of similar parts of speech words, returns one
function replaceWith(partOfSpeech) {
  return sample(partOfSpeech);
}

// TESTS
console.log(madlibs(template1));
console.log(madlibs(template1));
console.log(madlibs(template1));

console.log(madlibs(template2));
console.log(madlibs(template2));
console.log(madlibs(template2));
