#Ok i only have a vauge idea for what I want here... I'm thinking random number gen.
randnum = for x in [0...100] {return x}
correct = () => {
  return "Congrats! You guessed the number first try becuse I haven't fixed it to where you can enter multipal numbers."
}
guessNum = (playerchoice) => {
  switch playerchoice
    when playerchoice > randnum then return "Lower!"
    when playerchoice < randnum then return "Higher!"
    when playerchoice = randnum then correct()
}
guessNum(30)