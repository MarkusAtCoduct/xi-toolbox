import * as React from "react";

import Phase from "./phaseTemplate";

export default function PhaseSelector() {

	return (
		<>
		<Phase phasenumber="01" id="phasedrop_1" panel="panel1" phasetext="Community Building & Market Screening"/>
		<Phase phasenumber="02" id="phasedrop_2" panel="panel2" phasetext="Actor Commitment"/>
		<Phase phasenumber="03" id="phasedrop_3" panel="panel3" phasetext="Actor Target Match"/>
		<Phase phasenumber="04" id="phasedrop_4" panel="panel4" phasetext="Context & Problem"/>
		<Phase phasenumber="05" id="phasedrop_5" panel="panel5" phasetext="Discovery"/>
		<Phase phasenumber="06" id="phasedrop_6" panel="panel6" phasetext="Explore & Define"/>
		<Phase phasenumber="07" id="phasedrop_7" panel="panel7" phasetext="Evaluate & Validate"/>
		<Phase phasenumber="08" id="phasedrop_8" panel="panel8" phasetext="Develop & Test"/>
		<Phase phasenumber="09" id="phasedrop_9" panel="panel9" phasetext="Deliver & Listen"/>
		</>
	);
}
