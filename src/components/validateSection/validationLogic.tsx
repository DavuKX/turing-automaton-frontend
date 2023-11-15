import {turingMachineData} from "@/constans";
import {validationResultType} from "@/types/validationResultType";
import {useCookies} from 'next-client-cookies';

export const useValidationLogic = () => {
    const cookies = useCookies();

    const validateWord = async (inputString: string): Promise<validationResultType> => {
        return await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/validate-word/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                automaton_data: turingMachineData,
                word: inputString,
                uuid: cookies.get('uuid')
            })
        }).then((res) => res.json() as Promise<validationResultType>);
    };

    return {validateWord};
};
