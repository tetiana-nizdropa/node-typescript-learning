import * as fs from 'fs';
import * as fsPromises from 'fs.promises';

function writeFile(path: string, fileText: string): void {
    try {
        fs.writeFileSync(path, fileText);
    }
    catch (err) {
        console.log(err.message);
    }
}

async function writeFileAsync(path: string, fileText: string): Promise<any> {
    return await fsPromises.writeFile(path, fileText);
}

function readFile(path: string): string | Buffer {
    let response: string | Buffer;
    try {
        response = fs.readFileSync(path);
    }
    catch (err) {
        response = err.message;
    }
    return response;
}

async function readFileAsync(path: string): Promise<Buffer> {
    return fsPromises.readFile(path);
}

function isFileExist(path: string): boolean {
    try {
        return fs.existsSync(path);
    }
    catch (err) {
        return err.message;
    }
}

function copyFile(from: string, to: string): void {
    try {
        fs.copyFileSync(from, to);
    }
    catch (err) {
        console.log(err.message);
    }
}

async function copyFileAsync(from: string, to: string): Promise<void> {
    return fsPromises.copyFile(from, to);
}

module.exports = {
    writeFile,
    readFile,
    isFileExist,
    copyFile,
    // Async
    writeFileAsync,
    readFileAsync,
    copyFileAsync
};