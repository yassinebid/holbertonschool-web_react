// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });