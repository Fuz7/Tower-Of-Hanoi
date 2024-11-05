export default function colorGenerator(numberOfColors){
  const colorsArray = []
  const randomStart = Math.floor(Math.random() * 19) + 1;
  const intervals = Array.from({ length: 18 }, (_, i) => randomStart + i * 20);

  while(colorsArray.length !== numberOfColors){
    let randomColor
    do{
      const randomIndex = Math.floor(Math.random() * intervals.length)
      randomColor =  intervals[randomIndex]
    }while(colorsArray.includes(randomColor))
      
    colorsArray.push(randomColor) 
    

  }
  
  return colorsArray;
}