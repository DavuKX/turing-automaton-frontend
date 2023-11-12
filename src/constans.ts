import { turingMachine } from "@/types/automaton";

export const turingMachineGraphData = {
    nodes: [
        {data: {id: "start", label: "start"}},
        {data: {id: "q1", label: "q1"}},
        {data: {id: "q2", label: "q2"}},
        {data: {id: "q3", label: "q3", final: "true"}}
    ],
    edges: [
        {
            data: {source: "start", target: "q1", label: ""}
        },
        {
            data: {source: "q1", target: "q1", label: "a/a/R"}
        },
        {
            data: {source: "q1", target: "q1", label: "b/a/R"}
        },
        {
            data: {source: "q1", target: "q2", label: "λ/λ/L"}
        },
        {
            data: {source: "q2", target: "q2", label: "a/a/L"}
        },
        {
            data: {source: "q2", target: "q3", label: "λ/λ/R"}
        }
    ]
}

export const machineTuring: turingMachine = {
    states: ['start', 'q1', 'q2', 'q3'],
    alphabet: ['a', 'b'],
    transitions: {
        q1: { a: 'q1', b: 'q1', λ: 'q1' },
        q2: { a: 'q3', b: 'q2', λ: 'q2' },
        q3: { a: 'q3', b: 'q3', λ: 'q3' },
    },
    initialState: 'q1',
    acceptanceStates: ['q3'],
};