export interface ButtonProps {
  label: string; // Text shown on the button
  disabled?: boolean; // Optional, if true button is greyed out
  backgroundColor?: string; // Optional, button background color
  onClick?: () => void; // Optional, function to run when button is clicked
}
