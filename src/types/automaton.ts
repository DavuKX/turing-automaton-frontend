type TransitionTuring = {
    [char: string]: string;
};

export type turingMachine = {
    states: string[];
    alphabet: string[];
    transitions: {
        [key: string]: TransitionTuring;
    };
    initialState: string;
    acceptanceStates: string[];
};

export type AutomatonTypes = 'turing';