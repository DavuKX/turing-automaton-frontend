import {List, ListItem, Typography} from "@mui/material";
import React from "react";
import {useTranslations} from "next-intl";
import {validationResultType} from "@/types/validationResultType";

interface ValidationHistoryProps {
    history: validationResultType[];
  }
  
  export function ValidationHistoryComponent({ history }: ValidationHistoryProps) {
    const t = useTranslations();
  
    return (
      <>
        <Typography fontSize={18} fontWeight={"bold"}>
          {t('validationHistory')}
        </Typography>
        <List sx={{
          overflow: 'auto',
          height: 'calc(100vh - 520px)',
        }}>
          {history.map((entry, index) => (
            <ListItem key={index}>
              <p className="pr-1">{entry.word}</p>
            </ListItem>
          ))}
        </List>
      </>
    );
}