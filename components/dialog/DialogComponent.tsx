import DialogTrigger from '@/components/dialog/DialogTrigger';
import { CirclePlus, X } from '@tamagui/lucide-icons';
import { Button, Dialog, Unspaced, XStack } from 'tamagui';

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

export default function DialogComponent() {
	return (
		<Dialog modal>
			<DialogTrigger icon={CirclePlus} />

			<Dialog.Portal>
				{overlay}

				<Dialog.Content
					bordered
					elevate
					key="content"
					animateOnly={['transform', 'opacity']}
					animation={[
						'quicker',
						{
							opacity: {
								overshootClamping: true,
							},
						},
					]}
					enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
					exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
					gap="$4">
					<Dialog.Title>Edit profile</Dialog.Title>
					<Dialog.Description>Make changes to your profile here. Click save when you're done.</Dialog.Description>

					<XStack
						alignSelf="flex-end"
						gap="$4">
						<Dialog.Close
							displayWhenAdapted
							asChild>
							<Button
								theme="active"
								aria-label="Close">
								Save changes
							</Button>
						</Dialog.Close>
					</XStack>

					<Unspaced>
						<Dialog.Close asChild>
							<Button
								position="absolute"
								top="$3"
								right="$3"
								size="$2"
								circular
								icon={X}
							/>
						</Dialog.Close>
					</Unspaced>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog>
	);
}
