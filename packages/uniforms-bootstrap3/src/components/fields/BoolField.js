import React          from 'react';
import classnames     from 'classnames';
import {connectField} from 'uniforms';

import FormGroup from './FormGroup';

const Bool = props =>
    <FormGroup {...props}>
        <section className={classnames(props.inputClassName, `checkbox${props.inline ? '-inline' : ''}`)}>
            <label onClick={() => props.onChange(!props.value)}>
                <input
                    checked={props.value}
                    className="hidden"
                    disabled={props.disabled}
                    name={props.name}
                    onChange={() => props.onChange(!props.value)}
                    type="checkbox"
                />
                {props.label}
            </label>
        </section>
    </FormGroup>
;

export default connectField(Bool);

