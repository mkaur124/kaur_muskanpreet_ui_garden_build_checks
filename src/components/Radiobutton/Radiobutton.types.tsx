export interface RadioProps {
  label: string;
  name: string;
  value: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
