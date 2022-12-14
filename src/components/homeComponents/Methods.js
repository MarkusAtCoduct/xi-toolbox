import * as React from "react";
import Checkbox from "../../images/Checkbox.png";

export default function Methods() {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div
                style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: 28,
                    marginBottom: 20,
                    color: "#000000",
                }}>
                Tailor your methods with worldwide expert community
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 12,
                }}>
                <img style={{ width: 20, height: 20 }} src={Checkbox} />
                <div
                    style={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: 14,
                        marginLeft: 16,
                        color: "#000000",
                    }}>
                    Explore methods’ combinations, how to conduct, time, budget,
                    effectiveness in practice, and much more.
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 12,
                }}>
                <img style={{ width: 20, height: 20 }} src={Checkbox} />
                <div
                    style={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: 14,
                        marginLeft: 16,
                        color: "#000000",
                    }}>
                    Combine methods in the right sequance that gives you the
                    best results for your specific business case.
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 12,
                }}>
                <img style={{ width: 20, height: 20 }} src={Checkbox} />
                <div
                    style={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: 14,
                        marginLeft: 16,
                        color: "#000000",
                    }}>
                    Create new methods to fulfill your business needs
                    effeciently, and get the expert community validation.
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 28,
                }}>
                <img style={{ width: 20, height: 20 }} src={Checkbox} />
                <div
                    style={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: 14,
                        marginLeft: 16,
                        color: "#000000",
                    }}>
                    Share your experiences and riewies about methods’
                    combinations in practice.
                </div>
            </div>
            <button
                style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    textAlign: "left",
                    color: "#FF5449",
                    padding: "10 24",
                    marginBottom: 40,

                    background: "transparent",
                    borderColor: "transparent",
                    fontSize: 14,
                    fontWeight: 500,
                }}>
                Explore Methods Now
            </button>
        </div>
    );
}
