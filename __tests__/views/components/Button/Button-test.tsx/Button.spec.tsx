/**
 * @format
 */

import {render} from '@testing-library/react-native';
import 'react-native';
import Button from '../../../../../src/views/components/Button/Button';

describe('Set pruebas componente Button', () => {
  it('debe renderizar el componente correctamente', () => {
    const component = render(
      <Button text="Ok" variant="primary" accion={() => {}} size="regular" />,
    );
    expect(component).toMatchSnapshot();
    expect(component.getByText('Ok')).toBeTruthy();
  });
});
