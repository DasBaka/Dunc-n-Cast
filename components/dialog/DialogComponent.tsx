import DialogContent, { DialogContentProps } from './DialogContent';
import DialogTrigger from './close/DialogTrigger';

import { CirclePlus } from '@tamagui/lucide-icons';
import { Button, Dialog, GetProps } from 'tamagui';

// key values for overlay
const overlay = (
	<Dialog.Overlay
		key="overlay"
		animation={'slow'}
		opacity={0.5}
		enterStyle={{ opacity: 0 }}
		exitStyle={{ opacity: 0 }}
	/>
);

interface DialogProps {
	content: React.JSX.Element;
	trigger: GetProps<typeof Button>['icon'];
}

export default function DialogComponent(prop: DialogProps) {
	return (
		<Dialog modal>
			{/* dialog is only triggerable by icons atm!!! */}
			<DialogTrigger icon={CirclePlus}></DialogTrigger>
			<Dialog.Portal>
				{overlay}
				{prop.content}
			</Dialog.Portal>
		</Dialog>
	);
}
