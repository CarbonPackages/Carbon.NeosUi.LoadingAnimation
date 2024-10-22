import React, { useState, useEffect } from "react";
import { Circle, Dots } from "./Elements";
import { neos } from "@neos-project/neos-ui-decorators";

const style = {
    container: (heightMultiplier = 1) => ({
        display: "grid",
        gridTemplate: "'content' 1fr / 1fr",
        alignItems: "center",
        justifyItems: "center",
        width: "100%",
        minHeight: `calc(var(--spacing-GoldenUnit) * ${heightMultiplier})`,
    }),
    item: (active = false) => ({
        gridArea: "content",
        transition: "opacity var(--transition-Default), transform var(--transition-Default) ease",
        opacity: active ? 1 : 0,
        transform: `scale(${active ? 1 : 0})`,
    }),
};

function Loading({
    id,
    title = "Neos.Neos:Main:loading",
    isLoading = false,
    delayTime = 500,
    timeoutTime = 5000,
    i18nRegistry,
    heightMultiplier = 1,
}) {
    const [showLoading, setShowLoading] = useState(0);
    const translatedTitle = title ? i18nRegistry.translate(title) : null;

    useEffect(() => {
        if (!isLoading) {
            setShowLoading(0);
            return;
        }
        const delay = setTimeout(() => {
            setShowLoading(1);
        }, delayTime);
        const timeout = setTimeout(() => {
            setShowLoading(2);
        }, delayTime + timeoutTime);

        return () => {
            clearTimeout(delay);
            clearTimeout(timeout);
        };
    }, [isLoading]);

    if (!isLoading) {
        return null;
    }

    return (
        <div id={id} style={style.container(heightMultiplier)} title={translatedTitle}>
            <Circle style={style.item(showLoading == 1)} />
            <Dots style={style.item(showLoading == 2)} />
        </div>
    );
}

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
}));
export default neosifier(Loading);
