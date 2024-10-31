import { X } from '@tamagui/lucide-icons';
import { Dialog, Unspaced } from 'tamagui';
import { TriggerBtn } from '../../buttons/TriggerBtn';

export default function DialogXClose() {
	return (
		<Unspaced>
			<Dialog.Close asChild>
				<TriggerBtn
					position="absolute"
					top="$1"
					right="$1"
					icon={X}
				/>
			</Dialog.Close>
		</Unspaced>
	);
}
