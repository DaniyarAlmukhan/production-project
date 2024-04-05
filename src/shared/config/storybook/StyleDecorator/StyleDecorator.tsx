import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { DecoratorFunction } from '@storybook/addons';

export const StyleDecorator: DecoratorFunction = (story: () => Story) => story()
