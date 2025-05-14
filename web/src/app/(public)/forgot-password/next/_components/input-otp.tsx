import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function InputOTPWithSeparator({ value, onChange }: Props) {
  return (
    <InputOTP maxLength={6} value={value} onChange={onChange}>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
      <InputOTPSlot index={4} />
      <InputOTPSlot index={5} />
    </InputOTP>
  );
}
