export type StateType = {
    initial_state: string;
    next_state: string;
    tape: string;
    current_symbol_index: number;
    symbol: string;
    edge_label: string;
};

export type validationResultType = {
    id: number;
    uuid: string;
    word: string;
    result_word: string;
    is_valid: boolean;
    path: StateType[];
    created_at: string;
};
