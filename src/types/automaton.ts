type Transition = {
    read: string;
    write: string;
    move: string;
    to: string;
};

type Transitions = {
    [key: string]: Transition[];
};

export type TuringMachine = {
    states: string[];
    alphabet: string[];
    transitions: Transitions;
    initialState: string;
    acceptanceStates: string[];
};


export type AutomatonTypes = 'turing';