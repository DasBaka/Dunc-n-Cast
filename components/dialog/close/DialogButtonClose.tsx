import { X } from '@tamagui/lucide-icons';
import { FlexAlignType } from 'react-native';
import { Dialog, XStack } from 'tamagui';
import { TriggerBtn } from '../../buttons/TriggerBtn';

interface BtnCloseProps {
	text: string;
	align: 'unset' | 'auto' | FlexAlignType | undefined;
}

export default function DialogButtonClose(props: BtnCloseProps) {
	return (
		<XStack
			alignSelf={props.align}
			gap="$4">
			<Dialog.Close
				displayWhenAdapted
				asChild>
				<TriggerBtn
					theme="active"
					aria-label="Close"
					circular={false}
					size={'$5'}>
					{props.text}
				</TriggerBtn>
			</Dialog.Close>
		</XStack>
	);
}
