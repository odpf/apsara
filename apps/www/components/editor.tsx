import { styled } from "@odpf/apsara";

import { ChevronRightIcon, CopyIcon } from '@radix-ui/react-icons';

import React from "react";
import LiveEditor from "./live-editor";
import useCopyToClipboard from "./useClipboard";

interface Props {
    code: string;
    visible: boolean
    setVisible: (value: boolean) => void
}

const StyledEditor = styled("div", {
    borderRadius: "$2",
});

const Details = styled("details", {
    transition: "all 0.2s ease",
    overflow: "hidden",
});

const Summary = styled("summary", {
    boxSizing: "border-box",
    borderTop: "1px solid $gray4",
    color: "$gray11",
    width: "100%",
    listStyle: "none",
    userSelect: "none",
    outline: "none",
    cursor: "pointer",
    backgroundColor: "$gray1"
});

const SummarySafari = styled("div", {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "2.875rem",
    padding: "$4",
});

const Action = styled("div", {
    width: "auto",
    display: "flex",
    alignItems: "center",
    fontSize: "0.8rem",
    svg: {
        cursor: "pointer",
    },
});

const StyledChevronRightIcon = styled(ChevronRightIcon, {
    variants: {
        visible: {
            true: {
                transform: "rotate(90deg)",
                transition: "all .2s"
            }
        }
    }
})

const Editor: React.FC<Props> = ({ code, visible, setVisible }) => {
    const [_, copy] = useCopyToClipboard();

    
    const clickHandler = (event: React.MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();
        setVisible(!visible);
    };

    const copyHandler = (event: React.MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();
        copy(code);
    };

    return (
        <StyledEditor>
            <Details open={visible}>
                <Summary onClick={clickHandler}>
                    <SummarySafari>
                        <Action>
                            <StyledChevronRightIcon width={16} visible={visible} />
                            <span>{"Code Editor"}</span>
                        </Action>
                        <Action>
                            {visible && (
                                <span className="copy" onClick={copyHandler} title={"Copy Code"}>
                                    <CopyIcon width={18} />
                                </span>
                            )}
                        </Action>
                    </SummarySafari>
                </Summary>
                <LiveEditor number code={code}/>
            </Details>
        </StyledEditor>
    );
};

export default Editor;