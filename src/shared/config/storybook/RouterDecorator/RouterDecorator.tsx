import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { DecoratorFunction } from '@storybook/addons';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator: DecoratorFunction = (story: () => Story) => <BrowserRouter>{story()}</BrowserRouter>;
