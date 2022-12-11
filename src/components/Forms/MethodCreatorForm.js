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

import InputList from "../InputList";
import { useEffect } from "react";
export default function MethodCreatorForm(props) {
	const navigate = useNavigate();
	const [phaseName, setPhaseName] = React.useState([]);

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
			input : [
			{
				name: ""
			}],
			output : [
			{
				name: ""
			}],
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
		data.disadvantages = data.disadvantages.map(object => object.name);
		data.howToConduct = data.howToConduct.map(object => object.name);
		data.whenToConduct = data.whenToConduct.map(object => object.name);
		data.input = data.input.map(object => object.name);
		data.output = data.output.map(object => object.name);
		data.sameOutputMethods = data.sameOutputMethods.map(object => object.name);
		data.references = data.references.map(object => object.name);
		console.log(data);
		PostMethod("/api/method/create", data);
		navigate("/createSet");
	} 

	const onSubmitMethodSet = data => {
		
		data.advantages = data.advantages.map(object => object.name);
		data.disadvantages = data.disadvantages.map(object => object.name);
		data.howToConduct = data.howToConduct.map(object => object.name);
		data.whenToConduct = data.whenToConduct.map(object => object.name);
		data.input = data.input.map(object => object.name);
		data.output = data.output.map(object => object.name);
		data.sameOutputMethods = data.sameOutputMethods.map(object => object.name);
		data.references = data.references.map(object => object.name);
		data.usedMethodIds = state.set;
		data.isMethodSet = true;
		console.log(data);

		PostMethod("/api/method/create", data);
		navigate("/createSet");
	} 
	const onSubmitMethodUpdate = data => {
		data.advantages = data.advantages.map(object => object.name);
		data.disadvantages = data.disadvantages.map(object => object.name);
		data.howToConduct = data.howToConduct.map(object => object.name);
		data.whenToConduct = data.whenToConduct.map(object => object.name);
		data.input = data.input.map(object => object.name);
		data.output = data.output.map(object => object.name);
		data.sameOutputMethods = data.sameOutputMethods.map(object => object.name);
		data.references = data.references.map(object => object.name);

		UpdateMethod(`/api/method/${state.prefill.id}/update/`, data);
		navigate("/createSet");
	}

	const { control, watch, register, handleSubmit, formState: { errors } } = Fields;

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


	const { append: sameOutputMethodsAppend, remove: sameOutputMethodsRemove, fields: sameOutputMethodsFields } = useFieldArray(
		{control,
		name: 'sameOutputMethods'});

	const { append: referencesAppend, remove: referencesRemove, fields: referencesFields } = useFieldArray(
		{control,
		name: 'references'});

		useEffect(() => {
		if(state.prefill){
			if(advantageFields.length  < 1){advantageRemove();}
			if(disadvantageFields.length  < 1){disadvantageRemove();}
			if(howToConductFields.length  < 1){howToConductRemove();}
			if(whenToConductFields.length  < 1){whenToConductRemove();}
			if(inputFields.length  < 1){inputRemove();}
			if(outputFields.length  < 1){outputRemove();}
			if(sameOutputMethodsFields.length  < 1){sameOutputMethodsRemove();}
			if(referencesFields.length  < 1){referencesRemove();}

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
			state.prefill.input.forEach(input => {
				inputAppend({name: input})
			})
			state.prefill.output.forEach(output => {
				outputAppend({name: output})
			})
			state.prefill.sameOutputMethods.forEach(sameOutputMethod => {
				sameOutputMethodsAppend({name: sameOutputMethod})
			})
			state.prefill.references.forEach(reference => {
				referencesAppend({name: reference})
			})

			}
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



	return (
    <form
      onSubmit={
        state.isMethodSet
          ? handleSubmit(onSubmitMethodSet)
          : state.methodupdate
          ? handleSubmit(onSubmitMethod)
          : handleSubmit(onSubmitMethodUpdate)
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
          <Stack direction="column" spacing={4}>
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
                id="filled-basic"
                label="name"
                variant="filled"
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
                id="filled-basic"
                label="brief description of the method"
                variant="filled"
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
                id="filled-basic"
                label="describe your method in detail..."
                variant="filled"
                defaultValue={state.prefill?.description || ""}
              />
            </div>
            <Stack
              direction={"row"}
              alignItems="center"
              justifyContent="flex-start"
              spacing={6}
            >
              <Stack direction={"row"} alignItems="center">
                <Checkbox
                  {...register("isPublished")}
                  defaultChecked
                  size="medium"
                />
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: "400",
                  }}
                >
                  This method is newely created by me and does not pre-exist
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems="center">
                <Checkbox {...register("needInvolvement")} size="medium" />
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

            <Stack direction="row" spacing={3} justifyContent="center">
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
                  id="filled-basic"
                  type={"number"}
                  label="€"
                  variant="filled"
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
                  id="filled-basic"
                  label="time in days"
                  variant="filled"
                />
              </div>
            </Stack>
            <Stack direction="row" spacing={4}>
              <InputList
                header="Advantages"
                addHint="Add more Advantages"
                formRegister="advantages"
                register={register}
                data={advantageFields}
                Remove={advantageRemove}
                Append={advantageAppend}
              />
              <InputList
                header="Disadvantages"
                addHint="Add more Disdvantages"
                formRegister="disadvantages"
                register={register}
                data={disadvantageFields}
                Remove={disadvantageRemove}
                Append={disadvantageAppend}
              />
            </Stack>

            <InputList
              header="How to Conduct"
              addHint="Next Step..."
              formRegister="howToConduct"
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
          <Stack direction="column" spacing={4}>
            <InputList
              header="When to Conduct"
              addHint="Add more cases"
              formRegister="whenToConduct"
              register={register}
              data={whenToConductFields}
              Remove={whenToConductRemove}
              Append={whenToConductAppend}
            />

            <Stack direction="row" alignItems="center" spacing={4}>
              <InputList
                header="Input"
                addHint="Add more inputs"
                formRegister="input"
                register={register}
                data={inputFields}
                Remove={inputRemove}
                Append={inputAppend}
              />
              <InputList
                header="Output"
                addHint="Add more outputs"
                formRegister="output"
                register={register}
                data={outputFields}
                Remove={outputRemove}
                Append={outputAppend}
              />
            </Stack>

            <Stack direction="row" spacing={4}>
            <FormControl sx={{ m: 1}}fullWidth>
			  <InputLabel id="demo-multiple-name-label">Relevant Phases</InputLabel>
                <Select
                  {...register("relevantPhases")}
                  value={phaseName}
                  defaultValue="Phases"
                  multiple
                  input={<OutlinedInput label="Relevant Phases" />}
                  onChange={handlePhaseChange}
                >
                  {phases.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
             {/* <InputList
                header="Relevant Phases"
                addHint="Add more Advantages"
                formRegister="relevantPhases"
                register={register}
                data={relevantPhasesFields}
                Remove={relevantPhasesRemove}
                Append={relevantPhasesAppend}
              /> */}
              <InputList
                header="Methods of the same Output"
                addHint="Add more Disdvantages"
                formRegister="sameOutputMethods"
                register={register}
                data={sameOutputMethodsFields}
                Remove={sameOutputMethodsRemove}
                Append={sameOutputMethodsAppend}
              />
            </Stack>

            <InputList
              header="References"
              addHint="Add more References"
              formRegister="references"
              register={register}
              data={referencesFields}
              Remove={referencesRemove}
              Append={referencesAppend}
            />
          </Stack>
        </CardContent>
      </Card>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        mt={4}
        pb={4}
      >
        <Button
          sx={{ width: "264px", height: "52px" }}
          variant="outlined"
          onClick={() => navigate("/createSet")}
        >
          Cancel
        </Button>
        <Button
          sx={{ width: "264px", height: "52px" }}
          type="submit"
          variant="contained"
        >
          Save
        </Button>
      </Stack>
    </form>
  );
}
