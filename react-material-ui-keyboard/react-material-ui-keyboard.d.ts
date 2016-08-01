// Type definitions for react-material-ui-keyboard 1.0.4
// Project: https://github.com/NoHomey/react-material-ui-keyboard
// Definitions by: Ivo Stratev <https://github.com/NoHomey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path='../react/react.d.ts' />
///<reference path='../material-ui/material-ui.d.ts' />

declare module 'react-material-ui-keyboard' {
	export * from 'react-material-ui-keyboard/Keyboard';
}

declare module 'react-material-ui-keyboard/Keyboard' {
	import * as React from 'react';
	import { KeyboardKeyContext } from 'react-material-ui-keyboard/KeyboardKey';
	const AlphaNumericKeyboard: KeyboardLayout;
	const CapsedAlphaNumbericKeyboard: KeyboardLayout;
	const NumericKeyboard: KeyboardLayout;
	export { KeyboardKeyContext, AlphaNumericKeyboard, CapsedAlphaNumbericKeyboard, NumericKeyboard };
	export type KeyboardLayout = Array<Array<string>>;
	export function KyeboardCapsLock(layout: KeyboardLayout, caps: boolean): KeyboardLayout;
	export type RequestCloseHandler = () => void;
	export type InputHandler = (input: string) => void;
	export interface KeyboardProps {
	    textField: React.ReactNode;
	    open: boolean;
	    onRequestClose: RequestCloseHandler;
	    onInput: InputHandler;
	    layout: Array<KeyboardLayout>;
	}
	export interface KeyboardState {
	    value?: string;
	    layout?: number;
	    capsLock?: boolean;
	}
	export class Keyboard extends React.Component<KeyboardProps, KeyboardState> {
	    static contextTypes: Object;
	    context: KeyboardKeyContext;
	    private _onKeyboard;
	    private _onKeyDown;
	    private _handleKeyboard(key);
	    private _handleKeyDown(event);
	    constructor(props: KeyboardProps, context: KeyboardKeyContext);
	    shouldComponentUpdate(props: KeyboardProps, state: KeyboardState): boolean;
	    componentDidUpdate(props: KeyboardProps, state: KeyboardState): void;
	    render(): JSX.Element;
	}
	export default Keyboard;
}

declare module 'react-material-ui-keyboard/KeyboardKey' {
	import * as React from 'react';
	import { MuiTheme } from 'material-ui/styles';
	export type KeyboardKeyPressHandler = (key: string) => void;
	export interface KeyboardKeyProps {
	    keyboardKey: string;
	}
	export interface KeyboardKeyContext {
	    muiTheme: MuiTheme;
	}
	export class KeyboardKeyHandller {
	    static onKeyPress: KeyboardKeyPressHandler;
	}
	export class KeyboardKey extends React.Component<KeyboardKeyProps, void> {
	    static contextTypes: Object;
	    context: KeyboardKeyContext;
	    private _onClick;
	    private _handleClick(event);
	    constructor(props: KeyboardKeyProps, context: KeyboardKeyContext);
	    shouldComponentUpdate(props: KeyboardKeyProps, state: void): boolean;
	    render(): JSX.Element;
	}
	export default KeyboardKey;
}

declare module 'react-material-ui-keyboard/SimpleListItem' {
	import * as React from 'react';
	export default class SimpleListItem extends React.Component<void, void> {
	    render(): JSX.Element;
	}
}
