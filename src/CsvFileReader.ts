import fs from 'fs';

export class CsvFileReader {
    data: string[][] = [];

    constructor(public fileName: string) {}

    read(): void {
        /**
         * read a passed file in utf-8 style. The file will be split on
         * newlines as an array of strings and each element of tha array
         * is a row of the file.
         * We then take each element/row and split that by the commas which
         * are separating the values to produce an array where each row of
         * the datafile is an array of strings.
         */
        this.data = fs
            .readFileSync(this.fileName, {
                encoding: 'utf-8',
            })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',');
            });
    }
}
