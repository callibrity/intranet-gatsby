import React, {Dispatch, SetStateAction} from 'react';

export type reactChildren = React.ReactNode[] | React.ReactElement;

export type setStateFunction<T> = Dispatch<SetStateAction<T>>;