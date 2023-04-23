import { createRockPaperScissors, Move, Outcome } from "./rock-paper-scissors";

describe(`rock-paper-scissors`, () => {
    describe('play', () => {
        test('paper and move rock, should return a winner', () => {
            //Arrange
            const sut = createRockPaperScissors();
            //act
            const actual = sut.play(Move.Paper, Move.Rock);
    
            //Asset
            expect(actual).toBe(Outcome.PlayerWins)
        });
    
        test('paper and opponent move scissors should player loses', () => {
            //Arrange
            const sut = createRockPaperScissors();
            //act
            const actual = sut.play(Move.Paper, Move.Scissors);
    
            //Asset
            expect(actual).toBe(Outcome.PlayerLoses)
        });

        test('move paper and opponent move paper should be a tie', () => {
            const sut = createRockPaperScissors();

            const actual = sut.play(Move.Paper, Move.Paper);

            expect(actual).toBe(Outcome.Tie)
        });

        test('move rock and opponent move scissors should be a winner', () => {
            const sut = createRockPaperScissors();

            const actual = sut.play(Move.Rock, Move.Scissors);

            expect(actual).toBe(Outcome.PlayerWins)
        });

        test('it should return a Tie for two Scissors', () => {
            const sut = createRockPaperScissors();

            const actual = sut.play(Move.Scissors, Move.Scissors);

            expect(actual).toBe(Outcome.Tie)
        });
    });


    describe('shouldReturnAWinner', () => {

        describe('given two moves', () => {
            it('should return PlayerWins for Paper and Rock' , () => {
                const sut = createRockPaperScissors();
        
                const actual = sut.shouldReturnAWinner(Move.Paper, Move.Rock);
        
                expect(actual).toBe(Outcome.PlayerWins)
            });

            it('should return PlayerLoses for Paper and Scissors' , () => {
                const sut = createRockPaperScissors();
        
                const actual = sut.shouldReturnAWinner(Move.Paper, Move.Scissors);
        
                expect(actual).toBe(Outcome.PlayerLoses)
            });

            it('should return a tie for Paper and Paper' , () => {
                const sut = createRockPaperScissors();
        
                const actual = sut.shouldReturnAWinner(Move.Paper, Move.Paper);
        
                expect(actual).toBe(Outcome.Tie);
            });

            it('should return PlayerLoses for Scissors and Rock' , () => {
                const sut = createRockPaperScissors();
        
                const actual = sut.shouldReturnAWinner(Move.Scissors, Move.Rock);
        
                expect(actual).toBe(Outcome.PlayerLoses);
            });
        });
    });
});
