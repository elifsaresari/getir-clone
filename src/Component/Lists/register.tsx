import { useState,FC } from 'react';
import ReactFlagsSelect from 'react-flags-select';
export const Register: FC = () => {

    const [selected, setSelected] = useState('TR');

    const flags = {
        US: '+1',
        GB: '+5',
        FR: '+70',
        DE: '+30',
        IT: '+11',
        TR: '+90',
    }
    return (
        <ReactFlagsSelect
            countries={Object.keys(flags)}
            customLabels={flags}
            selected={selected}
            onSelect={code => setSelected(code)}
        />
    )}

export default Register
