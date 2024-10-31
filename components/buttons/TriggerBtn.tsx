import { Button, GetProps, styled } from 'tamagui';

export const TriggerBtn = styled(Button, {
	circular: true,
	// chromeless: 'all', // disabled for developement
	size: '$6',
});

export type TriggerBtnProps = GetProps<typeof TriggerBtn>;
