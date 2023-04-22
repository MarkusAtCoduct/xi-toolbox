import * as React from "react";

export default function Fakten() {
    return (
        <div
            styles={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginBottom: 65,
            }}>
            <div>
                <div
                    style={{
                        
                        fontStyle: "normal",
                        fontWeight: 900,
                        fontSize: 50,
                        color: "#FF5449",
                    }}>
                    1235
                </div>
                <div
                    styles={{
                        color: "#5C5F5D",
                        
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: 22,
                    }}>
                    Methods
                </div>
            </div>
            <div styles={{ display: "flex", flexDirection: "column" }}>
                <div
                    style={{
                        
                        fontStyle: "normal",
                        fontWeight: 900,
                        fontSize: 50,
                        color: "#FF5449",
                    }}>
                    356
                </div>
                <div
                    styles={{
                        color: "#5C5F5D",
                        
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: 22,
                    }}>
                    Creators
                </div>
            </div>
            <div styles={{ display: "flex", flexDirection: "column" }}>
                <div
                    style={{
                        
                        fontStyle: "normal",
                        fontWeight: 900,
                        fontSize: 50,
                        color: "#FF5449",
                    }}>
                    3876
                </div>
                <div
                    styles={{
                        color: "#5C5F5D",
                        
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: 22,
                    }}>
                    Participants
                </div>
            </div>
        </div>
    );
}
