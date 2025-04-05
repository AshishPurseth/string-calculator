function add(numbers) {
    if (numbers === "") return 0;
  
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
      const match = numbers.match(/^\/\/(.+)\n(.*)$/);
      delimiter = new RegExp(match[1]);
      numbers = match[2];
    }
  
    const parts = numbers.split(delimiter).map(Number);
    const negatives = parts.filter(n => n < 0);
  
    if (negatives.length > 0) {
      throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }
  
    return parts.reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = { add };
  