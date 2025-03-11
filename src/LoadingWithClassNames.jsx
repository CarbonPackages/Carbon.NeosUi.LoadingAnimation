import React, { useState, useEffect } from "react";
import { Circle, Dots } from "./Elements";
import { neos } from "@neos-project/neos-ui-decorators";
import style from "./style.module.css";

function Loading({
    id,
    title = "Neos.Neos:Main:loading",
    isLoading = false,
    delayTime = 500,
    timeoutTime = 5000,
    i18nRegistry,
    heightMultiplier = 1,
    width = 60,
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
        <div
            id={id}
            style={{ "--height-multiplier": heightMultiplier }}
            className={style.container}
            title={translatedTitle}
        >
            <Circle size={width / 2} className={showLoading == 1 ? style.active : style.inactive} />
            <Dots size={width / 2} className={showLoading == 2 ? style.active : style.inactive} />
        </div>
    );
}

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
}));
export default neosifier(Loading);
