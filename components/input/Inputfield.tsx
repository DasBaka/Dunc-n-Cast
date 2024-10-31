import { Input, XStack } from 'tamagui';

interface InputProps {
	placeholder: string;
	children?: React.JSX.Element;
}

export default function Inputfield(props: InputProps) {
	return (
		<XStack alignItems="center">
			<Input
				flex={1}
				placeholder={props.placeholder}
			/>
			{props.children}
		</XStack>
	);
}
