import { TriggerBtn } from '@/components/buttons/TriggerBtn';
import { Button, Dialog, GetProps } from 'tamagui';

type TriggerButton = GetProps<typeof Button>;

interface trigger {
	icon?: TriggerButton['icon'];
	text?: string | undefined;
}

export default function DialogTrigger(prop: trigger) {
	const child = prop.icon !== undefined ? <TriggerBtn icon={prop.icon} /> : <TriggerBtn>{prop.text}</TriggerBtn>;
	return <Dialog.Trigger asChild>{child}</Dialog.Trigger>;
}
