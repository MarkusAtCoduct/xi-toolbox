import { atom } from "jotai";

export const queryAtom = atom({
	label: "",
	pageIndex: 0,
	sortBy: "name",
	sortDirection: "asc",
	includeMethods: true,
	includeMethodSets: true,
  })