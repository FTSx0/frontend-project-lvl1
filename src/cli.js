import readlineSync from 'readline-sync';

const yourName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${name}!`);
};
export default yourName;