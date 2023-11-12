export type StateType = {
    initial_state: string;
    final_state: string;
    char: string;
};

export type validationResultType = {
    result: boolean;
    word: string;
    states: StateType[];
};
