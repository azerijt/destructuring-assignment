function listFollowers(followerNames: string[]): string {
  // complete function
  // use array destructuring, for practice!
  console.log(followerNames)
  const [a, b]= followerNames

  return `Followed by ${a}, ${b} and others`;
}

export default listFollowers;




