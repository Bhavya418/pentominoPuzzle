// Web Worker

import solveSat from 'boolean-sat';
// import parseSexp from 's-expression';
import { solve as solveExactCover } from 'dlxlib';

self.z3Ready = false;
self.z3SolverOutputLines = [];
self.z3Solver = null;

self.onmessage = function(event) {

    if (event.data == 'loadZ3') {
        // Do nothing if it's already loaded
        if (self.z3Ready) return self.postMessage('z3Loaded');

        self.importScripts('z3w.js');

        self.z3Solver = Z3({
            ENVIRONMENT: 'WORKER',
            onRuntimeInitialized: () => {
                self.z3Ready = true;
                self.postMessage('z3Loaded');
            },
            print: message => self.z3SolverOutputLines.push(message),
        });
    }

    let { type, problem } = event.data;

    if (type == 'sat') {

        let { numVars, clauseList } = problem;
        let solution = solveSat(numVars, clauseList);

        self.postMessage({ solution });

    }  else if (type == 'dlx') {

        let { matrix } = problem;

        let solutions = solveExactCover(matrix, null, null, 1);

        if (solutions.length == 0) {
            self.postMessage({ solution: null });
        } else {
            let rows = solutions[0].map(i => matrix[i]);
            self.postMessage({ solution: rows });
        }

    }

};
