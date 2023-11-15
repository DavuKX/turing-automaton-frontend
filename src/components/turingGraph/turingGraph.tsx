"use client"
import React, {useEffect} from 'react';
// @ts-ignore
import CytoscapeComponent from "react-cytoscapejs";
import {layout, mainColor, secondaryColor, styleSheet} from "@/components/turingGraph/turingStyles";
import {validationResultType} from "@/types/validationResultType";
import {speak} from "@/components/validateSection/helpers";
import Grid from "@mui/material/Grid";
import {useTranslations} from 'next-intl';

interface turingGraphProps {
    graphData: GraphData;
    validationResult: validationResultType;
    turingSpeed: number;
}

const turingGraph: React.FC<turingGraphProps> = ({graphData, validationResult, turingSpeed}) => {
    const graphRef = React.useRef<any>(null);
    const getValidationSpeed = () => 500 / (turingSpeed / 100);
    const t = useTranslations()

    useEffect(() => {
        if (validationResult.word) {
            const nodes = graphRef.current.nodes();
            const edges = graphRef.current.edges();

            const applyStylesWithDelay = async () => {
                for (const state of validationResult.path) {
                    applyStylesToNodes(nodes, state.initial_state, state.next_state);
                    applyStylesToEdges(edges, state.initial_state, state.next_state, state.edge_label);

                    await new Promise((resolve) => {
                        setTimeout(resolve, getValidationSpeed());
                    });
                }
            };

            applyStylesWithDelay().then(() => speak(t(validationResult.is_valid ? 'accept' : 'reject')));
        }
    }, [validationResult]);

    useEffect(() => {
        graphRef.current.layout(layout).run();
    }, [graphData])


    const applyStylesToNodes = (nodes: any, initialState: string, finalState: string) => {
        nodes.forEach((node: any) => {
            if (node.data().label === initialState || node.data().label === finalState) {

                node.style({
                    "border-color": secondaryColor,
                    "border-width": "6px",
                });
            } else {
                node.style({
                    "border-color": mainColor,
                    "border-width": "3px",
                });
            }
        });
    };

    const applyStylesToEdges = (edges: any, initialState: string, finalState: string, char: string) => {
        edges.forEach((edge: any) => {
            if (
                (edge.data().source === initialState && edge.data().target === finalState
                    && (char.toLowerCase() === edge.data().label.toLowerCase())
                )
            ) {
                edge.style({
                    "line-color": secondaryColor,
                    "target-arrow-color": secondaryColor,
                });
            } else {
                edge.style({
                    "line-color": mainColor,
                    "target-arrow-color": mainColor,
                });
            }
        });
    };


    return (
        <Grid container style={{width: "100%", height: "100%"}}>
            <CytoscapeComponent
                elements={CytoscapeComponent.normalizeElements(graphData)}
                style={{width: "100%", height: "100%"}}
                zoomingEnabled={true}
                maxZoom={3}
                minZoom={0.1}
                autounselectify={false}
                boxSelectionEnabled={true}
                layout={layout}
                stylesheet={styleSheet}
                cy={(cy: any) => {
                    graphRef.current = cy;
                }}
            />
        </Grid>
    );    
};

export default turingGraph;