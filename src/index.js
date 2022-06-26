module.exports = function toReadable (number) {
  let digits = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen', 'sixteen', 'seventeen', 'eighteen','nineteen']
  let sos = ['zero', 'one','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
  let n = '';
  t = 0;

  if (number == 0) {
    return 'zero';
  }

  if (number>99) {
    n = digits[Math.floor(number/100)] + ' hundred ';
  }

  if (number%100==0){
    return n.slice(0,n.length-1);
  }

  number = number%100;

  if(Math.floor(number/10)>1){
    n = n + sos[Math.floor(number/10)];
  }

  if (number<20){
    n = n + digits[number];
  }

  if (number > 19 & number%10!=0) {
    n = n + " " + digits[number%10];
  }

  return n
}
