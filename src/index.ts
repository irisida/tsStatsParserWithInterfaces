import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

const csvFileReader = new CsvFileReader('./data/football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUtdWins = 0;

for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUtdWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUtdWins++;
    }
}

console.log(`Man United won ${manUtdWins} games`);
