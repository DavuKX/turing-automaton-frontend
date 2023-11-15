import React, {useState} from 'react';
import {Button} from '@mui/material';
import {validationResultType} from "@/types/validationResultType";
import { useValidationLogic } from './validationLogic';
import {useTranslations} from "use-intl";
import PlayIcon from '@mui/icons-material/PlayArrow';
import SkipNext from '@mui/icons-material/SkipNext';
import FastRewind from '@mui/icons-material/FastRewind';
import Grid from "@mui/material/Grid";

interface ValidateSectionProps {
    inputString: string;
    onFinishedValidation: (result: validationResultType) => void;
}

const ValidateSection: React.FC<ValidateSectionProps> = ({inputString, onFinishedValidation}) => {
    const t = useTranslations()
    const [validInputMessageVisible, setValidInputMessageVisible] = useState(false);
    const { validateWord } = useValidationLogic();

    const handleValidate = async () => {
        if (inputString && inputString.length > 0) {
            setValidInputMessageVisible(false);
            const validationResult = await validateWord(inputString);
            onFinishedValidation(validationResult);
        } else {
            setValidInputMessageVisible(true);
        }
    };

    return (
        <Grid container direction="row" justifyContent="center" spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={1}>
                <Button variant="outlined" fullWidth onClick={handleValidate}>
                    <PlayIcon />
                </Button>
            </Grid>
            {/* <Grid item xs={1}>
                <Button variant="outlined" fullWidth onClick={handleValidate}>
                    <SkipNext />
                </Button>
            </Grid> */}
            <Grid item xs={2}></Grid>
            {validInputMessageVisible && <div>{t('validInput')}</div>}
        </Grid>
    );
        
};

export default ValidateSection;
