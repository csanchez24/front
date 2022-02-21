import classNames from 'classnames';

interface BaseInputProps {
  type: 'text' | 'number' | 'email' | 'password';
  id: string;
  name: string;
  label: string;
  disabled?: boolean;
  error?: string;
  touched: boolean;
  handleChange?: any;
  handleBlur?: any;
  value?: string;
}

export const BaseInput: React.FC<BaseInputProps> = ({
  type,
  id,
  name,
  label,
  disabled,
  error,
  touched,
  handleChange,
  handleBlur,
  value,
}) => {
  return (
    <>
      <div className="flex justify-between">
        <label
          htmlFor={name}
          className={classNames('label-regular', {
            'label-error': error && touched,
          })}
        >
          {label}
        </label>
        {error && touched && (
          <span className="text-sm text-red-600">{error}</span>
        )}
      </div>
      <div className="mt-1">
        <input
          type={type}
          id={id}
          name={name}
          disabled={disabled}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={error && touched ? 'input-error' : 'input-regular'}
        />
      </div>
    </>
  );
};
