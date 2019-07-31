import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { Button, Text } from 'native-base';
import commonColor from '../../../native-base-theme/variables/commonColor';

type Props = Partial<{
	onPress: () => void
}>;

// tslint:disable:max-line-length
export default function RotateButton(props: Props): React.ReactElement {
	const {
		onPress = () => {}
	} = props;

	return (
		<Button transparent onPress={onPress}>
			<Svg viewBox="0 0 184.973 184.973" width={40} height={40}>
				<Path
					fill={commonColor.brandPrimary}
					stroke={commonColor.brandPrimary}
					strokeWidth={2.5}
					d="M184.973,84.619c0-23.498-40.628-41.893-92.486-41.893S0,61.128,0,84.619   c0,1.647,1.337,2.983,2.983,2.983s2.983-1.337,2.983-2.983c0-19.476,39.626-35.927,86.52-35.927s86.52,16.457,86.52,35.927   c0,19.321-39.041,35.658-85.475,35.903l10.627-10.615c1.164-1.158,1.164-3.055,0-4.219c-1.164-1.158-3.055-1.158-4.219,0   l-17.853,17.841l17.853,17.847c0.585,0.591,1.349,0.871,2.112,0.871c0.77,0,1.533-0.292,2.112-0.871   c1.164-1.158,1.164-3.055,0-4.219l-10.675-10.669C144.858,126.238,184.973,107.956,184.973,84.619z"
				/>
			</Svg>
			<Text>
				Развернуть
			</Text>
		</Button>
	);
}
