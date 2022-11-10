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
    type: "methodset",
    methods: [
        {id : "1",
        header: "focus group",
        container: "recommendedMethodContainer",
        type: "method"
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
        }]
    },

    {id: "3",
    header: "think aloud",
    container: "recommendedMethodContainer",
    type: "method",
    author: "Max Mustermann",
    brief: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,"
},
    {id: "4",
    header: "storyboard",
    container: "recommendedMethodContainer",
    type: "method"
    },
    {id: "5",
    header: "oneMoreMethod",
    container: "recommendedMethodContainer",
    type: "method"
    }])