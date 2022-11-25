import Avatar from "@mui/material/Avatar";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Stack } from "@mui/system";
import Select from "@mui/material/Select";
import { Typography, Button, Card, CardContent, IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";

import * as React from "react";
import { FormProvider, useForm, useFieldArray, Controller } from 'react-hook-form';
import { PostMethod } from "./Api";
import {FormGroup, Checkbox} from "@mui/material";

import InputAdornment from '@mui/material/InputAdornment';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { DeleteOutline } from "@mui/icons-material";

import { useLocation} from "react-router-dom"

import InputList from "./InputList";
export default function MethodCreatorForm(props) {


	const location = useLocation()
	const { set } = location.state || ""

	const Fields = useForm( {defaultValues: {


		
	



		advantages : [""],
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
			input : [
			{
				name: ""
			}],
			output : [
			{
				name: ""
			}],
			relevantPhases : [
			{
				name: ""
			}],
			sameOutputMethods : [
			{
				name: ""
			}],
			references: [
			{
				name: ""
			}],
			usedMethods:[
			{
				name: ""
			}
			]

		}});

	const onSubmit = data => {
		
		data.advantages = data.advantages.map(object => object.name);
		data.disadvantages = data.disadvantages.map(object => object.name);
		data.howToConduct = data.howToConduct.map(object => object.name);
		data.whenToConduct = data.whenToConduct.map(object => object.name);
		data.input = data.input.map(object => object.name);
		data.output = data.output.map(object => object.name);
		data.relevantPhases = data.relevantPhases.map(object => object.name);
		data.sameOutputMethods = data.sameOutputMethods.map(object => object.name);
		data.references = data.references.map(object => object.name);
		console.log(data);
		PostMethod("/api/method/create", data);
	} 

	const { control, register, handleSubmit, formState: { errors } } = Fields;

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
			
	const { append: inputAppend, remove: inputRemove, fields: inputFields } = useFieldArray(
		{control,
		name: 'input'});

	const { append: outputAppend, remove: outputRemove, fields: outputFields } = useFieldArray(
		{control,
		name: 'output'});
	const { append: relevantPhasesAppend, remove: relevantPhasesRemove, fields: relevantPhasesFields } = useFieldArray(
		{control,
		name: 'relevantPhases'});

	const { append: sameOutputMethodsAppend, remove: sameOutputMethodsRemove, fields: sameOutputMethodsFields } = useFieldArray(
		{control,
		name: 'sameOutputMethods'});

	const { append: referencesAppend, remove: referencesRemove, fields: referencesFields } = useFieldArray(
		{control,
		name: 'references'});
	
	const { append: usedMethodsAppend, remove: usedMethodsRemove, fields: usedMethodsFields } = useFieldArray(
		{control,
		name: 'usedMethods'});


	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Card sx={{ marginBottom: "32px", borderRadius: "16px" }} elevation={0}>
				<CardContent sx={{ paddingBottom: "32px", paddingLeft: "96px", paddingRight: "96px" }}>
					<Stack direction='column' spacing={4}>
						<div style={{ width: "100%" }}>
							<Typography
								sx={{
									fontSize: 18,
									fontWeight: "400",
									float: "left",
								}}
							>
								Method's name
							</Typography>
							<TextField {...register("name", { required: true })} fullWidth id='filled-basic' label='name' variant='filled' />
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
							/>
						</div>
						<Stack direction={"row"} alignItems='center' justifyContent='flex-start' spacing={6}>
							<Stack direction={"row"} alignItems='center'>
								<Checkbox {...register("isPublished")} size='small' />
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
								<Checkbox {...register("needInvolvement")} size='small' />
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
								<TextField {...register("cost", { required: true })} fullWidth id='filled-basic' label='€' variant='filled' />
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
								<TextField {...register("time", { required: true })} fullWidth id='filled-basic' label='time in days' variant='filled' />
							</div>
						</Stack>
						<Stack direction="row" spacing={4}>
						<InputList header="Advantages" addHint="Add more Advantages" formRegister="advantages" register={register} data={advantageFields} Remove={advantageRemove} Append={advantageAppend}/>
						<InputList header="Disadvantages" addHint="Add more Disdvantages" formRegister="disadvantages" register={register} data={disadvantageFields} Remove={disadvantageRemove} Append={disadvantageAppend}/>
						</Stack>

						<InputList header="How to Conduct" addHint="Next Step..." formRegister="howToConduct" register={register} data={howToConductFields} Remove={howToConductRemove} Append={howToConductAppend}/>
						

					</Stack>
				</CardContent>
			</Card>

			<Card sx={{ borderRadius: "16px" }} elevation={0}>
				<CardContent sx={{ paddingLeft: "96px", paddingRight: "96px" }}>
					<Stack direction='column' spacing={4}>
					<InputList header="When to Conduct" addHint="Add more cases" formRegister="whenToConduct" register={register} data={whenToConductFields} Remove={whenToConductRemove} Append={whenToConductAppend}/>

					<Stack direction="row" spacing={4}>
						<InputList header="Input" addHint="Add more inputs" formRegister="input" register={register} data={inputFields} Remove={inputRemove} Append={inputAppend}/>
						<InputList header="Output" addHint="Add more outputs" formRegister="output" register={register} data={outputFields} Remove={outputRemove} Append={outputAppend}/>
						</Stack>


						<Stack direction="row" spacing={4}>
						<InputList header="Relevant Phases" addHint="Add more Advantages" formRegister="relevantPhases" register={register} data={relevantPhasesFields} Remove={relevantPhasesRemove} Append={relevantPhasesAppend}/>
						<InputList header="Methods of the same Output" addHint="Add more Disdvantages" formRegister="sameOutputMethods" register={register} data={sameOutputMethodsFields} Remove={sameOutputMethodsRemove} Append={sameOutputMethodsAppend}/>
						</Stack>


						<InputList header="References" addHint="Add more References" formRegister="usedMethods" register={register} data={usedMethodsFields} Remove={usedMethodsRemove} Append={usedMethodsAppend}/>

					</Stack>
				</CardContent>
			</Card>

			<Stack direction='row' justifyContent='center' alignItems='center' spacing={4} mt={4} pb={4}>
				<Button sx={{ width: "264px", height: "52px" }} variant='outlined' onClick={() => console.log(set)}>
					Cancel
				</Button>
				<Button sx={{ width: "264px", height: "52px" }} type='submit' variant='contained'>
					Save Profile
				</Button>
			</Stack>
		</form>
	)
}
