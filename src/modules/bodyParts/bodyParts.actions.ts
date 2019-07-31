import { createAction } from 'redux-actions';
import { ActionTypes, ChooseBodyPartPayload, SetChosenBodyPartNamePayload, SetGenderPayload } from './';

export const setGenderAction = createAction<SetGenderPayload>(ActionTypes.SetGender);
export const switchPositionAction = createAction(ActionTypes.SwitchPosition);
export const selectBodyPartAction = createAction<ChooseBodyPartPayload>(ActionTypes.ChooseBodyPart);
export const setChosenBodyPartNameAction =
	createAction<SetChosenBodyPartNamePayload>(ActionTypes.SetChosenBodyPartName);
