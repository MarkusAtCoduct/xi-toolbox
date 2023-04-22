import { atom } from "jotai";

export const activeAtom = atom(null)
export const dragDisableAtom = atom(false)
export const methodAtom = atom([])
export const outputAtom = atom("")
export const phaseAccordionAtom = atom()
export const phaseAtom = atom([])
export const privatePhaseAtom = atom()
export const queryAtom = atom({
	label: "",
	pageIndex: 0,
	sortBy: "name",
	sortDirection: "asc",
	includeMethods: true,
	includeMethodSets: true,
  })
export const recommendedMethodAtom = atom([])
export const tabAtom = atom(false)
export const userAtom = atom(null)