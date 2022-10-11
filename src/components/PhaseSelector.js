import * as React from "react";
import Phase from "./phaseTemplate";

export default function PhaseSelector() {

	return (
		<>
		<Phase phasenumber="01" phasetext="Community Building & Market Screening"/>
		<Phase phasenumber="02" phasetext="Actor Commitment"/>
		<Phase phasenumber="03" phasetext="Actor Target Match"/>
		<Phase phasenumber="04" phasetext="Context & Problem"/>
		<Phase phasenumber="05" phasetext="Discovery"/>
		<Phase phasenumber="06" phasetext="Explore & Define"/>
		<Phase phasenumber="07" phasetext="Evaluate & Validate"/>
		<Phase phasenumber="08" phasetext="Develop & Test"/>
		<Phase phasenumber="09" phasetext="Deliver & Listen"/>
		</>
	);
}
