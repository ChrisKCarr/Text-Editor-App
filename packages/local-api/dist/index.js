"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serve = void 0;
const serve = (port, filename, dir) => {
    console.log('serving files to port: ', port);
    console.log('saving/fetching cells from: ', filename);
    console.log('that file can be found in: ', dir);
};
exports.serve = serve;
