import React, {ChangeEvent, useState} from 'react';
import {
    Box,
    Paper,
    Slider,
    TextField,
    Typography
} from "@mui/material";
import Grid from "@mui/material/Grid";
import {useTranslation} from 'react-i18next';
import ValidateSection from "@/components/validateSection/validateSection";
import {AutomatonTypes} from "@/types/automaton";
import {validationResultType} from "@/types/validationResultType";

interface ToolsSectionProps {
    onWordsChanged: (words: string) => void;
    inputWords: string,
    onFinishedValidation: (result: validationResultType) => void;
    onAutomatonSpeedChanged: (automatonSpeed: number[] | number) => void;
}

const ToolsSection: React.FC<ToolsSectionProps> = ({onWordsChanged, inputWords, onFinishedValidation, onAutomatonSpeedChanged}) => {
    const [automatonSpeed, setAutomatonSpeed] = useState(50);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const words = e.target.value;
        onWordsChanged(words);
    };

    const handleAutomatonSpeedChange = (e: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            setAutomatonSpeed(newValue);
            onAutomatonSpeedChanged(newValue);
        }
    };

    const {t} = useTranslation();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Grid container direction="row" alignItems="center" spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            id="outlined-multiline-static"
                            label={t("word")}
                            defaultValue=""
                            fullWidth
                            minRows={1}
                            maxRows={1}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>{t("speed")}</Typography>
                        <Slider
                            value={automatonSpeed}
                            aria-label="Default"
                            valueLabelDisplay="auto"
                            min={10}
                            onChange={(e: Event, newValue: number | number[]) => handleAutomatonSpeedChange(e, newValue)}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <ValidateSection
                    inputString={inputWords.toLowerCase()}
                    onFinishedValidation={onFinishedValidation}
                />
            </Grid>
        </Grid>
    );
    
};

export default ToolsSection;
