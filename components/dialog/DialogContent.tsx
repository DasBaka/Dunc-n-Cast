import { FlexAlignType } from 'react-native';
import { Dialog, styled } from 'tamagui';
import DialogButtonClose from './close/DialogButtonClose';
import DialogXClose from './close/DialogXClose';

// key values of Content
const ContentWrapper = styled(Dialog.Content, {
	animateOnly: ['transform', 'opacity'],
	animation: [
		'quicker',
		{
			opacity: {
				overshootClamping: true,
			},
		},
	],
	enterStyle: { x: 0, y: -20, opacity: 0, scale: 0.9 },
	exitStyle: { x: 0, y: 10, opacity: 0, scale: 0.95 },
	gap: '$4',
	elevate: true,
	bordered: true,
});

export interface DialogContentProps {
	title: string;
	description: string;
	closingText: string;
	closingAlignment?: 'unset' | 'auto' | FlexAlignType | undefined;
	children?: React.JSX.Element;
}

export default function DialogContent(props: DialogContentProps) {
	return (
		<ContentWrapper key="content">
			<Dialog.Title>{props.title}</Dialog.Title>
			<Dialog.Description>{props.description}</Dialog.Description>
			{props.children}

			{/* closing the dialog */}
			<DialogButtonClose
				align={props.closingAlignment}
				text={props.closingText}
			/>
			<DialogXClose />
		</ContentWrapper>
	);
}
