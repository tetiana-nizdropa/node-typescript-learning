const fsLib = require('./FileSystemLib');
import * as mock from 'mock-fs';

describe('Testing block for file system methods', () => {
    beforeEach(function() {
        mock({
          'fake-file': 'Hi there'
        });
    });

    describe('Should', () => {
        it('check if file has been written', () => {
            // write file
            const fileText = 'Congrats from spec!';
            const path = 'just-another-fake-file';
            fsLib.writeFile(path, fileText);
            // check written file
            const response = String(fsLib.readFile('just-another-fake-file'));
            expect(response).toEqual(fileText);
        });
        it('check if file has been written asynchronously', async() => {
            // write file
            const fileText = 'There somthing written asynchronously';
            await fsLib.writeFileAsync('async-written-file', fileText);
            // read file
            const response: string = String(await fsLib.readFileAsync('async-written-file'));
            expect(response).toEqual(fileText);
        });
    });

    describe('Shoud', () => {
        it('return the content of file', () => {
            const response: string = String(fsLib.readFile('fake-file'));
            expect(response).toEqual('Hi there');
        });
        it('return the content of file asynchronously', async() => {
            const response: string = String(await fsLib.readFileAsync('fake-file'));
            expect(response).toEqual('Hi there');
        });
    });

    describe('Should', () => {
        it('check if the file exists', () => {
            expect(fsLib.isFileExist('fake-file')).toBeTruthy();
        });
    });

    describe('Should', () => {
        it('coppy file to defined direction', () => {
            fsLib.copyFile('fake-file', 'another-fake-file');
            const anotherFile: string = String(fsLib.readFile('another-fake-file'));
            expect(anotherFile).toEqual('Hi there');
        });
        it('coppy file to defined direction asunchronously', async() => {
            await fsLib.copyFileAsync('fake-file', 'another-fake-file');
            const anotherFile: string = String(await fsLib.readFileAsync('another-fake-file'));
            expect(anotherFile).toEqual('Hi there');
        });
    });
});