import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

/**
 * tuple of the types we want for a row in matches
 */
type MatchData = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
    read(): void;
    data: string[][];
}

export class MatchReader {
    matches: MatchData[] = [];

    constructor(public reader: DataReader) {}

    load(): void {
        this.reader.read();

        /**
         * Assign to matches the result of mapping the parsed file which is
         * a string[][] at this stage to take each row/array and make a new
         * MatchData type from it. These are assigned to matches property.
         */
        this.matches = this.reader.data.map(
            (row: string[]): MatchData => {
                return [
                    dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResult,
                    row[6],
                ];
            }
        );
    }
}
