export default function towerOfHanoi(n,startingRod,endRod,otherRod,array=[]){
  if(n == 0){
    return array
  }
 towerOfHanoi(n-1,startingRod,otherRod,endRod,array)
 
  array.push({disk:n,startingRod:startingRod,endRod:endRod})
  return towerOfHanoi(n-1,otherRod,endRod,startingRod,array)
}