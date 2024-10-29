import { Button, GetProps, styled } from 'tamagui';

export const IconBtn = styled(Button, {
	circular: true,
	chromeless: 'all',
});

export type IconBtnProps = GetProps<typeof IconBtn>;
