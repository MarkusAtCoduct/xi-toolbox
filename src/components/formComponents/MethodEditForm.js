import { Stack } from "@mui/system";
import { Typography, Button, Card, CardContent } from "@mui/material";
import TextField from "@mui/material/TextField";

import * as React from "react";
import { useForm, useFieldArray} from 'react-hook-form';
import { UpdateMethod } from "../../services/Api";
import { Checkbox} from "@mui/material";
import { useLocation} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';

import InputList from "./InputList";
import { GetContent } from "../../services/Api";
import { queryAtom } from "../../atoms/queryAtom";
import { useAtom } from "jotai";
import { methodAtom } from "../../atoms/methodAtom";

import { useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { ToggleButton } from "@mui/material";
import { ToggleButtonGroup } from "@mui/material";
import InformationPopover from "../InformationPopover";

export default function MethodEditForm(props) {
	const navigate = useNavigate();
	const [phaseName, setPhaseName] = React.useState([]);
	const [inputName, setInputName] = React.useState([]);
	const [outputName, setOutputName] = React.useState([]);
	const [methods, setMethods] = useAtom(methodAtom);
  	const [inputOutput, setInputOutput] = React.useState({inputs: [], outputs: []});
  	const [query, setQuery] = useAtom(queryAtom)
	const queryClient = useQueryClient()

	const location = useLocation()
	const state = location.state || ""

	const Fields = useForm({
		defaultValues: {
			advantages: [
				{
					name: "",
				},
			],
			disadvantages: [
				{
					name: "",
				},
			],
			howToConduct: [
				{
					name: "",
				},
			],
			whenToConduct: [
				{
					name: "",
				},
			],
			input: [],
			output: [],
			relevantPhases: [],
			references: [
				{
					name: "",
				},
			],
		},
	})




	const onSubmitMethodUpdate = data => {
		data.advantages = data.advantages.map(object => object.name);
    	data.advantages = data.advantages.filter(advantage => advantage !== "");
		data.disadvantages = data.disadvantages.map(object => object.name);
    	data.disadvantages = data.disadvantages.filter(disadvantage => disadvantage !== "");
		data.howToConduct = data.howToConduct.map(object => object.name);
    	data.howToConduct = data.howToConduct.filter(howToConduct => howToConduct !== "");
		data.whenToConduct = data.whenToConduct.map(object => object.name);
    	data.whenToConduct = data.whenToConduct.filter(whenToConduct => whenToConduct !== "");
		if(data.input == "Other"){
		data.input = [data.inputOther]
		}

		if(data.output == "Other"){
		data.output = [data.outputOther]
		}
		data.relevantPhases = phaseName;
		//data.relevantPhases = data.relevantPhases.filter(relevantPhase => relevantPhase !== "");

		data.references = data.references.map(object => object.name);
    	data.references = data.references.filter(reference => reference !== "");
		console.table(data)

		UpdateMethod(`/api/method/${state.prefill.id}/update/`, data);	
		navigate("/createSet");
	}

	
	const {mutate: updateMethod} = useMutation(onSubmitMethodUpdate, {
		onSettled: async() => {
			console.log("Edited method")
			await queryClient.invalidateQueries('methods')
			await queryClient.invalidateQueries('userMethods')
		}
	})

	const { control, watch, register, handleSubmit, setValue, formState: { errors } } = Fields;

	var { move: advantageMove, append: advantageAppend,remove: advantageRemove,fields: advantageFields } = useFieldArray(
			{control,
			name: 'advantages'});

	var { move: disadvantageMove, append: disadvantageAppend, remove: disadvantageRemove, fields: disadvantageFields } = useFieldArray(
			{control,
			name: 'disadvantages'});

	var { move: howToConductMove, append: howToConductAppend, remove: howToConductRemove, fields: howToConductFields } = useFieldArray(
			{control,
			name: 'howToConduct'});
			
	var {move: whenToConductMove, append: whenToConductAppend, remove: whenToConductRemove, fields: whenToConductFields } = useFieldArray(
		{control,
		name: 'whenToConduct'});

	var {move: referencesMove, append: referencesAppend, remove: referencesRemove, fields: referencesFields } = useFieldArray(
		{control,
		name: 'references'});

		useEffect(() => {
		if(state.prefill){
			console.log(state.prefill);
			if(advantageFields.length  < 1){advantageRemove();}
			if(disadvantageFields.length  < 1){disadvantageRemove();}
			if(howToConductFields.length  < 1){howToConductRemove();}
			if(whenToConductFields.length  < 1){whenToConductRemove();}
			if(referencesFields.length  < 1){referencesRemove();}

			setValue("input", state.prefill.input);
			setValue("output", state.prefill.output);
			setValue("relevantPhases", state.prefill.relevantPhases);
			setInputName(state.prefill.input);
			setOutputName(state.prefill.output);
			setPhaseName(state.prefill.relevantPhases);

			state.prefill.advantages.forEach(advantage => {
				advantageAppend({name: advantage})
			})
			state.prefill.disadvantages.forEach(disadvantage => {
				disadvantageAppend({name: disadvantage})
			})
			state.prefill.howToConduct.forEach(howToConduct => {
				howToConductAppend({name: howToConduct})
			})
			state.prefill.whenToConduct.forEach(whenToConduct => {
				whenToConductAppend({name: whenToConduct})
			})
			state.prefill.references.forEach(reference => {
				referencesAppend({name: reference})
			})

			}
	}, [])

	useEffect(() => {

		
		GetContent(`/api/method/search?label=&pageIndex=0&pageSize=500&sortBy=${query.sortBy}&sortDirection=${query.sortDirection}&includeMethods=${query.includeMethods}&includeMethodSets=${query.includeMethodSets}`)
		.then((response) => {
			//from the response get the inputs and outputs and put them in a new array
			let inputs = ["Other"]
			let outputs = ["Other"]
			response.data.forEach(method => {
				method.input.forEach(input => {
					inputs.push(input)
				})
				method.output.forEach(output => {
					outputs.push(output)
				})
			})
			//make the inputs and outputs unique
			inputs = [...new Set(inputs)]
			outputs = [...new Set(outputs)]

			//create an object with the inputs and outputs
			let inputsOutputs = {
				inputs,
				outputs
			}
		
      setInputOutput(inputsOutputs)
			console.log(inputOutput)
		});	
	}, [])

	const phases = [
		'Community Building & Market Screening',
		'Actor Commitment',
		'Actor Target Match',
		'Context & Problem',
		'Discovery',
		'Explore & Define',
		'Evaluate & Validate',
		'Develop & Test',
		'Deliver & Listen'
	]


const handleChange = (event, newPhases) => {
	  console.log(newPhases)
      setPhaseName(newPhases);
    
  };



const handleInputChange = (event) => {
  const {
    target: { value },
  } = event;
  setInputName(
    typeof value === 'string' ? value.split(',') : value,
    
  );
  };

const handleOutputChange = (event) => {
  const {
    target: { value },
  } = event;
  setOutputName(
    typeof value === 'string' ? value.split(',') : value,
  );
  };

	return (
		<form
		onSubmit={handleSubmit(updateMethod)}
		>
			<Card sx={{ marginBottom: "32px", borderRadius: "16px" }} elevation={0}>
				<CardContent
					sx={{
						paddingTop: "64px",
						paddingBottom: "56px",
						paddingLeft: "64px",
						paddingRight: "64px",
					}}
					>
					
					<Stack direction='column' spacing={4}>
						<div style={{ width: "100%" }}>
							<Typography
								sx={{
									fontSize: 18,
									fontWeight: "400",
									float: "left",
								}}
							>
								Name
							</Typography>
							<TextField
								{...register("name", { required: true })}
								fullWidth
								id='filled-basic'
								label='name'
								variant='filled'
								defaultValue={state.prefill?.name || null}
							/>
						</div>

						<div style={{ width: "100%" }}>
							<Typography
								sx={{
									fontSize: 18,
									fontWeight: "400",
									float: "left",
								}}
							>
								<Stack direction={"row"} alignItems="center">
								Brief <InformationPopover infoText="fökjasdkönjnaökjfdnaö ajsfnök janfökajsdfnkjgasdö lj"/>
								</Stack>
							</Typography>
							<TextField
								{...register("descriptionBrief", { required: true })}
								fullWidth
								id='filled-basic'
								label='brief description of the method'
								variant='filled'
								defaultValue={state.prefill?.descriptionBrief || ""}
							/>
						</div>
						<div style={{ width: "100%" }}>
							<Typography
								sx={{
									fontSize: 18,
									fontWeight: "400",
									float: "left",
								}}
							>
								Description
							</Typography>
							<TextField
								{...register("description")}
								fullWidth
								multiline
								minRows={4}
								id='filled-basic'
								label='describe your method in detail...'
								variant='filled'
								defaultValue={state.prefill?.description || ""}
							/>
						</div>
						<Stack direction={"row"} alignItems='center' justifyContent='flex-start' spacing={6}>
							<Stack direction={"row"} alignItems='center'>
								<Checkbox {...register("isPublished")} defaultChecked size='medium' />
								<Typography
									sx={{
										fontSize: 12,
										fontWeight: "400",
									}}
								>
									This method is newely created by me and does not pre-exist
								</Typography>
							</Stack>
							<Stack direction={"row"} alignItems='center'>
								<Checkbox {...register("needInvolvement")} size='medium' />
								<Typography
									sx={{
										fontSize: 12,
										fontWeight: "400",
									}}
								>
									Expert Involvement is needed
								</Typography>
							</Stack>
						</Stack>

						<Stack direction='row' spacing={3} justifyContent='center'>
							<div style={{ width: "100%" }}>
								<Typography
									sx={{
										fontSize: 18,
										fontWeight: "400",
										float: "left",
									}}
								>
									Cost
								</Typography>
								<TextField
									{...register("cost", { required: true })}
									defaultValue={state.prefill?.cost}
									fullWidth
									id='filled-basic'
									type={"number"}
									label='price in €'
									variant='filled'
								/>
							</div>
							<div style={{ width: "100%" }}>
								<Typography
									sx={{
										fontSize: 18,
										fontWeight: "400",
										float: "left",
									}}
								>
									Time
								</Typography>
								<TextField
									{...register("time", { required: true })}
									defaultValue={state.prefill?.time}
									fullWidth
									type={"number"}
									id='filled-basic'
									label='time in days'
									variant='filled'
								/>
							</div>
						</Stack>
						<Stack direction='row' spacing={4}>
							<InputList
								header='Advantages'
								addHint='Add more Advantages'
								formRegister='advantages'
								register={register}
								data={advantageFields}
								Remove={advantageRemove}
								Append={advantageAppend}
								Move={(res) => {advantageMove(res[0], res[1])}}
							/>
							<InputList
								header='Disadvantages'
								addHint='Add more Disdvantages'
								formRegister='disadvantages'
								register={register}
								data={disadvantageFields}
								Remove={disadvantageRemove}
								Append={disadvantageAppend}
								Move={(res) => {disadvantageMove(res[0], res[1])}}
							/>
						</Stack>

						<InputList
							header='How to Conduct'
							addHint='Next Step...'
							formRegister='howToConduct'
							register={register}
							data={howToConductFields}
							Remove={howToConductRemove}
							Append={howToConductAppend}
							Move={(res) => {howToConductMove(res[0], res[1])}}
						/>
					</Stack>
				</CardContent>
			</Card>

			<Card sx={{ borderRadius: "16px" }} elevation={0}>
				<CardContent sx={{ paddingLeft: "96px", paddingRight: "96px" }}>
					<Stack direction='column' spacing={4}>
						<InputList
							header='When to Conduct'
							addHint='Add more cases'
							formRegister='whenToConduct'
							register={register}
							data={whenToConductFields}
							Remove={whenToConductRemove}
							Append={whenToConductAppend}
							Move={(res) => {whenToConductMove(res[0], res[1])}}
						/>

						<Stack direction='row' spacing={4} alignItems='flex-start'>
							<div style={{ width: "100%" }}>
								<Typography
									sx={{
										fontSize: 22,
										fontWeight: "400",
										float: "left",
									}}
								>
									Input
								</Typography>
								<FormControl fullWidth sx={{ marginBottom: "24px", marginTop: "8px"  }}>
									<Select
										{...register("input")}
										value={inputName}
										onChange={handleInputChange}
									>
										{inputOutput.inputs.map((name) => (
											<MenuItem key={name} value={name}>
												{name}
											</MenuItem>
										))}
									</Select>
								</FormControl>

								{inputName == "Other" && <TextField {...register("inputOther")} fullWidth variant='filled' label='Input' />}
							</div>
              <div style={{ width: "100%" }}>
								<Typography
									sx={{
										fontSize: 22,
										fontWeight: "400",
										float: "left",
									}}
								>
									Output
								</Typography>
								<FormControl fullWidth sx={{ marginBottom: "24px", marginTop: "8px" }}>
									<Select
										{...register("output")}
										value={outputName}
										onChange={handleOutputChange}
									>
										{inputOutput.outputs.map((name) => (
											<MenuItem key={name} value={name}>
												{name}
											</MenuItem>
										))}
									</Select>
								</FormControl>

								{outputName == "Other" && 
                <TextField {...register("outputOther")} fullWidth variant='filled' label='Output' />}
							</div>
						</Stack>
						<div>
						<Typography
									sx={{
										fontSize: 22,
										fontWeight: "400",
										float: "left",
									}}
									gutterBottom
								>
									Sub Processes
								</Typography>
							<ToggleButtonGroup
								fullWidth
     							color="primary"
								orientation="horizontal"
      							value={phaseName}
      							onChange={handleChange}
      							aria-label="Platform"
    							>
									{phases.map((phase, index) => (
											<ToggleButton
											sx={{padding: "16px"}}
											value={phase}>
												<Typography>
													{phase}
												</Typography>
											</ToggleButton>
										)
										)}
							</ToggleButtonGroup>

							</div>
						
						<InputList
							header='References'
							addHint='Add more References'
							formRegister='references'
							register={register}
							data={referencesFields}
							Remove={referencesRemove}
							Append={referencesAppend}
							Move={(res) => {referencesMove(res[0], res[1])}}
						/>
					</Stack>
				</CardContent>
			</Card>

			<Stack direction='row' justifyContent='center' alignItems='center' spacing={4} mt={4} pb={4}>
				<Button sx={{ width: "264px", height: "52px" }} variant='outlined' onClick={() => navigate("/createSet")}>
					Cancel
				</Button>
				<Button sx={{ width: "264px", height: "52px" }} type='submit' variant='contained'>
					Save
				</Button>
			</Stack>
		</form>
	)
}
