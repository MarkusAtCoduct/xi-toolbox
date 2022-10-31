import * as React from "react";

import Phase from "./phaseTemplate";

export default function PhaseSelector() {

	return (
		<>
		<Phase phasenumber="01" id="phasedrop_1" phasetext="Community Building & Market Screening"/>
		<Phase phasenumber="02" id="phasedrop_2" phasetext="Actor Commitment"/>
		<Phase phasenumber="03" id="phasedrop_3" phasetext="Actor Target Match"/>
		<Phase phasenumber="04" id="phasedrop_4" phasetext="Context & Problem"/>
		<Phase phasenumber="05" id="phasedrop_5" phasetext="Discovery"/>
		<Phase phasenumber="06" id="phasedrop_6" phasetext="Explore & Define"/>
		<Phase phasenumber="07" id="phasedrop_7" phasetext="Evaluate & Validate"/>
		<Phase phasenumber="08" id="phasedrop_8" phasetext="Develop & Test"/>
		<Phase phasenumber="09" id="phasedrop_9" phasetext="Deliver & Listen"/>
		</>
	);
}
