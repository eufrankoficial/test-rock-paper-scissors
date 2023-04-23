export enum Move {
    Paper,
    Rock,
    Scissors
}

export enum Outcome {
    PlayerWins,
    PlayerLoses,
    PaperWins,
    PaperLoses,
    Tie
}


interface RockPaperScissors {
    play(p1Move: Move, p2Move: Move): Outcome,
    shouldReturnAWinner(p1Move: Move, p2Move: Move): Outcome
}

export function createRockPaperScissors (): RockPaperScissors {
    return {
        play(p1Move: Move, p2Move: Move) {
            return this.shouldReturnAWinner(p1Move, p2Move);
        },

        shouldReturnAWinner(p1Move: Move, p2Move: Move) {
            if(p2Move === p1Move) {
                return Outcome.Tie;
            }

            if (
                (p1Move === Move.Paper && p2Move === Move.Rock) ||
                (p1Move === Move.Rock && p2Move === Move.Scissors) ||
                (p1Move === Move.Scissors && p2Move === Move.Paper)
            ) {
                return Outcome.PlayerWins;
            }

            return Outcome.PlayerLoses;
        }
    }
}