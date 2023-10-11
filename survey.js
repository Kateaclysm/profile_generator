const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const prefArr = [];

rl.question('What is your name? Nicknames are acceptable.', (answer) => {
  console.log(`Understood! Hello, ${answer}!`);
  prefArr.push(answer);

  rl.question('What is an activity you like doing? ', (answer) => {
    console.log(`Gotcha! Thanks for the response!`);
    prefArr.push(answer);

    rl.question('What do you listen to while doing that?', (answer) => {
      console.log(`Gotcha! Thanks for the response!`);
      prefArr.push(answer);

        rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.)', (answer) => {
          prefArr.push(answer);
          console.log(`Gotcha! Thanks for the response!`);
        
          rl.question('What is your favourite thing to eat for that meal?', (answer) => {
            prefArr.push(answer);
            console.log(`Gotcha! Thanks for the response!`);
          
            rl.question('Which sport is your absolute favourite?', (answer) => {
              prefArr.push(answer);
              console.log(`Gotcha! Thanks for the response!`);
              rl.question('What is your Superpower? In a few words, tell us what you are best at!', (answer) => {
                prefArr.push(answer);
                console.log(`Great! I have all I need to make you a profile, ${prefArr[0]}! Give me a moment...`);
                setTimeout(() => {
                  console.log(
                  `Hi! Welcome to my profile! My name is ${prefArr[0]}. I really like ${prefArr[1]}, and I typically listen to ${prefArr[2]} while doing it!
                  I generally enjoy ${prefArr[3]}, and my favourite ${prefArr[3]} food is ${prefArr[4]}. My favourite sport is ${prefArr[5]}!
                  People generally say I'm great at ${prefArr[6]}!
                  Thanks for coming to check out my profile!`)
                }, 5000)
                rl.close();
              });
            });
          });
        });
      });
  });
});

console.log(prefArr);

