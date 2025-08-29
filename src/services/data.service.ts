export const processInputData = (data: string[]) => {
  const even_numbers: string[] = [];
  const odd_numbers: string[] = [];
  const alphabets: string[] = [];
  const special_characters: string[] = [];
  let sum = 0;
  let letters = '';

  for (const item of data) {
    if (/^-?\d+$/.test(item)) {
      const num = parseInt(item, 10);
      sum += num;
      if (num % 2 === 0) even_numbers.push(item);
      else odd_numbers.push(item);
    } else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
      letters += item;
    } else {
      special_characters.push(item);
    }
  }

  const concat_string = letters.split('').reverse().map((ch, i) =>
    i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()
  ).join('');

  return {
    is_success: true,
    user_id: "Shreyas_Mohanty_28082004",
    email: "shreyas.mohanty2022@vitstudent.ac.in",
    roll_number: "22BCE1335",
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string
  };
};
