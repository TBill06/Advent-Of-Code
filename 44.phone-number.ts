// v1.0 Basic Version
// Prolly shouldn't using map cause it ain't the right tool for this job
// DRY - Can cut it in half
export function clean(num: string): string {
  if (/[a-zA-Z]/.test(num)) throw new Error("Letters not permitted")
  if (/[^\d\s().+-]/.test(num)) throw new Error("Punctuations not permitted")
  let str = ''
  num.split('').map(i => {
    if (/\d/.test(i)) {
      console.log(i)
      str += i
    }
  })
  if (str.length < 10) throw new Error("Must not be fewer than 10 digits")
  else if (str.length > 11) throw new Error("Must not be greater than 11 digits")
  else if (str.length == 11) {
    if (str[0] !== '1') throw new Error("11 digits must start with 1")
    else if (str[1] == '0') throw new Error("Area code cannot start with zero")
    else if (str[1] == '1') throw new Error("Area code cannot start with one")
    else if (str[4] == '0') throw new Error("Exchange code cannot start with zero")
    else if (str[4] == '1') throw new Error("Exchange code cannot start with one")
    else str = str.slice(1)
  }
  if (str[0] == '0') throw new Error("Area code cannot start with zero")
  else if (str[0] == '1') throw new Error("Area code cannot start with one")
  else if (str[3] == '0') throw new Error("Exchange code cannot start with zero")
  else if (str[3] == '1') throw new Error("Exchange code cannot start with one")

  return str
}

// v2.0 Refactored Version
// .replace and \D removes all non-digit characters
export function cleanv2(num: string): string {
  if (/[a-zA-Z]/.test(num)) throw new Error('Letters not permitted');
  if (/[^\d\s().+-]/.test(num)) throw new Error('Punctuations not permitted');

  let digits = num.replace(/\D/g, '');

  if (digits.length < 10) throw new Error('Must not be fewer than 10 digits');
  if (digits.length > 11) throw new Error('Must not be greater than 11 digits');
  
  if (digits.length === 11) {
    if (digits[0] !== '1') throw new Error('11 digits must start with 1');
    digits = digits.slice(1);
  }

  if (digits[0] === '0') throw new Error('Area code cannot start with zero');
  if (digits[0] === '1') throw new Error('Area code cannot start with one');
  if (digits[3] === '0') throw new Error('Exchange code cannot start with zero');
  if (digits[3] === '1') throw new Error('Exchange code cannot start with one');

  return digits;
}