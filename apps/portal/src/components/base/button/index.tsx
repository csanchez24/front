import classNames from 'classnames';

interface BaseButtonProps {
  type: 'button' | 'submit';
  color: 'primary';
  disabled?: boolean;
  onClick?(): void;
}

export const BaseButton: React.FC<BaseButtonProps> = ({
  type,
  disabled,
  onClick,
  color,
  children,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={classNames('button', 'button-primary', `button-${color}`, {
        'button-disabled': disabled,
      })}
      onClick={() => (onClick ? onClick() : null)}
    >
      {children}
    </button>
  );
};
