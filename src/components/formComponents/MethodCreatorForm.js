import { Stack } from "@mui/system";
import { Typography, Button, Card, CardContent } from "@mui/material";
import TextField from "@mui/material/TextField";

import * as React from "react";
import { useForm, useFieldArray} from 'react-hook-form';
import { PostMethod, UpdateMethod } from "../../services/Api";
import { Checkbox} from "@mui/material";
import { useLocation} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { OutlinedInput } from "@mui/material";
import Chip from '@mui/material/Chip';

import InputList from "./InputList";
import { GetContent } from "../../services/Api";
import { queryAtom } from "../../atoms/queryAtom";
import { useAtom } from "jotai";

import { useEffect } from "react";


export default function MethodCreatorForm(props) {
	const navigate = useNavigate();
	const [phaseName, setPhaseName] = React.useState([]);
	const [inputName, setInputName] = React.useState([]);
	const [outputName, setOutputName] = React.useState([]);
  const [inputOutput, setInputOutput] = React.useState({inputs: [], outputs: []});
  const [query, setQuery] = useAtom(queryAtom)

	const location = useLocation()
	const state = location.state || ""

	const Fields = useForm( {defaultValues: {
		advantages : [
			{
				name: ""
			}],
			disadvantages : [
			{
				name: ""
			}]
			,
			howToConduct : [
			{
				name: ""
			}]
			,
			whenToConduct : [
			{
				name: ""
			}],
      input : [],
      output : [],
			relevantPhases : [],
			sameOutputMethods : [
			{
				name: ""
			}],
			references: [
			{
				name: ""
			}]

		}});

	const onSubmitMethod = data => {
		

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

		data.sameOutputMethods = data.sameOutputMethods.map(object => object.name);
    data.sameOutputMethods = data.sameOutputMethods.filter(sameOutputMethod => sameOutputMethod !== "");
		data.references = data.references.map(object => object.name);
    data.references = data.references.filter(reference => reference !== "");
		console.table(data);
		PostMethod("/api/method/create", data);
		navigate("/createSet");
	} 

	const onSubmitMethodSet = data => {
		
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

		data.sameOutputMethods = data.sameOutputMethods.map(object => object.name);
    data.sameOutputMethods = data.sameOutputMethods.filter(sameOutputMethod => sameOutputMethod !== "");
		data.references = data.references.map(object => object.name);
    data.references = data.references.filter(reference => reference !== "");
		data.usedMethodIds = state.set;
		data.isMethodSet = true;
		console.log(data);

		PostMethod("/api/method/create", data);
		navigate("/createSet");
	} 
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

		data.sameOutputMethods = data.sameOutputMethods.map(object => object.name);
    data.sameOutputMethods = data.sameOutputMethods.filter(sameOutputMethod => sameOutputMethod !== "");
		data.references = data.references.map(object => object.name);
    data.references = data.references.filter(reference => reference !== "");

		UpdateMethod(`/api/method/${state.prefill.id}/update/`, data);
		navigate("/createSet");
	}

	const { control, watch, register, handleSubmit, setValue, formState: { errors } } = Fields;

	const { append: advantageAppend,remove: advantageRemove,fields: advantageFields } = useFieldArray(
			{control,
			name: 'advantages'});

	const { append: disadvantageAppend, remove: disadvantageRemove, fields: disadvantageFields } = useFieldArray(
			{control,
			name: 'disadvantages'});

	const { append: howToConductAppend, remove: howToConductRemove, fields: howToConductFields } = useFieldArray(
			{control,
			name: 'howToConduct'});
			
	const { append: whenToConductAppend, remove: whenToConductRemove, fields: whenToConductFields } = useFieldArray(
		{control,
		name: 'whenToConduct'});
			

	const { append: sameOutputMethodsAppend, remove: sameOutputMethodsRemove, fields: sameOutputMethodsFields } = useFieldArray(
		{control,
		name: 'sameOutputMethods'});

	const { append: referencesAppend, remove: referencesRemove, fields: referencesFields } = useFieldArray(
		{control,
		name: 'references'});

		useEffect(() => {


		if(state.prefill){
console.log(state.prefill);

			if(advantageFields.length  < 1){advantageRemove();}
			if(disadvantageFields.length  < 1){disadvantageRemove();}
			if(howToConductFields.length  < 1){howToConductRemove();}
			if(whenToConductFields.length  < 1){whenToConductRemove();}
			if(sameOutputMethodsFields.length  < 1){sameOutputMethodsRemove();}
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
			state.prefill.sameOutputMethods.forEach(sameOutputMethod => {
				sameOutputMethodsAppend({name: sameOutputMethod})
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

const handlePhaseChange = (event) => {
  const {
    target: { value },
  } = event;
  setPhaseName(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
  };

const handleInputChange = (event) => {
  const {
    target: { value },
  } = event;
  setInputName(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
    
  );
  };

const handleOutputChange = (event) => {
  const {
    target: { value },
  } = event;
  setOutputName(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
  };

	return (
		<form
			onSubmit={
				state.isMethodSet ? handleSubmit(onSubmitMethodSet) : state.methodupdate ? handleSubmit(onSubmitMethod) : handleSubmit(onSubmitMethodUpdate)
			}
		>
			<Card sx={{ marginBottom: "32px", borderRadius: "16px" }} elevation={0}>
				<CardContent
					sx={{
						paddingBottom: "32px",
						paddingLeft: "96px",
						paddingRight: "96px",
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
								{state.isMethodSet ? "Methodset's name" : "Method's name"}
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
								Brief
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
							/>
							<InputList
								header='Disadvantages'
								addHint='Add more Disdvantages'
								formRegister='disadvantages'
								register={register}
								data={disadvantageFields}
								Remove={disadvantageRemove}
								Append={disadvantageAppend}
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

						<Stack direction='row' spacing={4}>
							<div style={{ width: "100%" }}>
								<Typography
									sx={{
										fontSize: 22,
										fontWeight: "400",
										float: "left",
									}}
								>
									Relevant Phases
								</Typography>
								<FormControl fullWidth >
									<InputLabel id='demo-multiple-name-label'>Relevant Phases</InputLabel>
									<Select
										{...register("relevantPhases")}
										value={phaseName}
										defaultValue='Phases'
										multiple
										input={<OutlinedInput label='Relevant Phases' />}
										onChange={handlePhaseChange}
									>
										{phases.map((name) => (
											<MenuItem key={name} value={name}>
												{name}
											</MenuItem>
										))}
									</Select>
								</FormControl>
								{phaseName.map((name) => (
									<Chip key={name} label={name} sx={{ mt: 1, mr: 1 }} />
								))}
							</div>
						
						</Stack>
            <InputList
								header='Methods of the same Output'
								addHint='Add more Disdvantages'
								formRegister='sameOutputMethods'
								register={register}
								data={sameOutputMethodsFields}
								Remove={sameOutputMethodsRemove}
								Append={sameOutputMethodsAppend}
							/>
						<InputList
							header='References'
							addHint='Add more References'
							formRegister='references'
							register={register}
							data={referencesFields}
							Remove={referencesRemove}
							Append={referencesAppend}
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
