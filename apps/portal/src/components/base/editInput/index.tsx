import { Button, Select, SelectItem, TextInput } from '@mantine/core';
import { useEffect, useState } from 'react';

interface EditInputProps {
  label: string;
  value: string;
  input: 'text' | 'select';
  inputType?: 'text' | 'number' | 'password';
  selectValues?: SelectItem[];
  onSave(value?: string): void;
}

export const EditInput: React.FC<EditInputProps> = ({
  label,
  value,
  inputType,
  input,
  selectValues,
  onSave,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState<string | undefined>('');

  useEffect(() => {
    if (!val) setVal(value);
  }, [val, value]);

  const handleClick = () => {
    if (editMode) {
      setEditMode(false);
      return onSave(val);
    } else {
      return setEditMode(true);
    }
  };
  return (
    <div className="flex justify-between items-center mb-2">
      <div>{label}</div>
      <div className="flex gap-2 justify-end items-center flex-1">
        {editMode ? (
          input === 'text' ? (
            <TextInput
              type={inputType}
              value={val}
              onChange={(event) => setVal(event.currentTarget.value)}
            />
          ) : (
            <Select
              value={val}
              data={selectValues!}
              onChange={(value) => setVal(value!)}
            />
          )
        ) : (
          value
        )}
        <Button variant="subtle" compact onClick={() => handleClick()}>
          {editMode ? 'Save' : 'Edit'}
        </Button>
      </div>
    </div>
  );
};
