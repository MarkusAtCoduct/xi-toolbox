import * as React from "react";

import PhaseButtons from "./PhaseButtons";
import Phase from "./phaseTemplate";

export default function PhaseSelector(props) {
	return (
		<>
			{props.type === "lib"
			?	<>
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
			: 	<>
					<PhaseButtons user={props?.user} phasenumber="01" id="phasedrop_1" panel="panel1" phasetext="Community Building & Market Screening"/>
					<PhaseButtons user={props?.user} phasenumber="02" id="phasedrop_2" panel="panel2" phasetext="Actor Commitment"/>
					<PhaseButtons user={props?.user} phasenumber="03" id="phasedrop_3" panel="panel3" phasetext="Actor Target Match"/>
					<PhaseButtons user={props?.user} phasenumber="04" id="phasedrop_4" panel="panel4" phasetext="Context & Problem"/>
					<PhaseButtons user={props?.user} phasenumber="05" id="phasedrop_5" panel="panel5" phasetext="Discovery"/>
					<PhaseButtons user={props?.user} phasenumber="06" id="phasedrop_6" panel="panel6" phasetext="Explore & Define"/>
					<PhaseButtons user={props?.user} phasenumber="07" id="phasedrop_7" panel="panel7" phasetext="Evaluate & Validate"/>
					<PhaseButtons user={props?.user} phasenumber="08" id="phasedrop_8" panel="panel8" phasetext="Develop & Test"/>
					<PhaseButtons user={props?.user} phasenumber="09" id="phasedrop_9" panel="panel9" phasetext="Deliver & Listen"/>
				</>
			}
		</>
	);
}
