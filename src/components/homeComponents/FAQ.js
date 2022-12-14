import * as React from "react";
import FAQQuestions from "./FAQQuestions";

export default function FAQ() {
    return (
        <div style={{ marginTop: 100 }}>
            <div
                style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: 64,
                    letterSpacing: -0.25,
                    color: "#000000",
                    marginBottom: 65,
                }}>
                Frequently asked Questions
            </div>
            <FAQQuestions />
        </div>
    );
}
