## Contract Puzzles

The goal of the Smart Contract puzzles is to work on reading smart contracts and writing good tests to modify those smart contracts.

### Updated test cases

Updated test cases with all tests passing :

```zsh
  Game1
    ✔ should be a winner (951ms)

  Game2
    ✔ should be a winner (113ms)

  Game3
    ✔ should be a winner (109ms)

  Game4
    ✔ should be a winner (82ms)

  Game5
    ✔ should be a winner (1009ms)


  5 passing (2s)
```

### Running the tests

First, install all the dependencies with `npm i`. Then, you can run all tests at once by running `npx hardhat test`. However, this might be frustrating when you are just trying to test an individual game.

If you are working on `Game1`, for instance, it will make more sense to run the test cases for the first game: `npx hardhat test test/game1Test.js`. Each Game contract will have a corresponding test file.
