import { IconBtn } from '@/components/buttons/IconBtn';
import { Button, Dialog, GetProps } from 'tamagui';

type triggerButton = GetProps<typeof Button>;

interface trigger {
	icon?: triggerButton['icon'];
	title?: string | undefined;
}

export default function DialogTrigger(prop: trigger) {
	const child = prop.icon !== undefined ? <IconBtn icon={prop.icon} /> : null;
	return <Dialog.Trigger asChild>{child}</Dialog.Trigger>;
}
