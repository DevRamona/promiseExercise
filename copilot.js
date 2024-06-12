function readFile(dataString) {
    
    const lines = dataString.split('\n');
    const numbers = [];
    for (const line of lines) {
      const trimmedLine = line.trim(); 
      if (trimmedLine) { 
        const num = parseInt(trimmedLine, 10);
        if (!isNaN(num)) {
          numbers.push(num);
        } else {
          console.warn(`Skipping invalid line: '${trimmedLine}'`);
        }
      }
    }
    return numbers;
  }
  
  function findDuplicates(data) {
    const duplicates = [];
    const counts = {};
    for (const num of data) {
      counts[num] = (counts[num] || 0) + 1;
      if (counts[num] === 2) {
        duplicates.push(num);
      }
    }
  
    for (let i = 0; i < duplicates.length - 1; i++) {
      for (let j = 0; j < duplicates.length - i - 1; j++) {
        if (duplicates[j] > duplicates[j + 1]) {
          const temp = duplicates[j];
          duplicates[j] = duplicates[j + 1];
          duplicates[j + 1] = temp;
        }
      }
    }
  
    return duplicates;
  }
  
  function writeFile(data) {
    console.log('Duplicates (simulated write):');
    for (const num of data) {
      console.log(num);
    }
  }
  
  function processFile(dataString) {
    const numbers = readFile(dataString);
    const duplicates = findDuplicates(numbers);
    if (duplicates.length) {
      writeFile(duplicates);
    } else {
      console.log('No duplicates found in the input data.');
    }
  }
  
  
  const data = `
  5
  14
    5  
  -9
  62
  -1
  -9
  -9
  `;
  
  processFile(data);
  