import { atom } from "jotai";

export const methodAtom = atom([
    {id : "1",
    header: "focus group",
    container: "recommendedMethodContainer",
    type: "method"
    },

    {id: "2",
    header: "interview",
    container: "recommendedMethodContainer",
    type: "methodset"
    },

    {id: "3",
    header: "think aloud",
    container: "recommendedMethodContainer",
    type: "method"
    },
    {id: "4",
    header: "storyboard",
    container: "recommendedMethodContainer",
    type: "method"
    }])