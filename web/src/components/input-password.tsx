"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function InputPassword({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        className={cn("pr-12", className)}
        {...props}
      />
      <button
        type="button"
        onClick={handleTogglePassword}
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
      >
        {showPassword ? (
          <EyeOff className="text-muted-foreground" />
        ) : (
          <Eye className="text-muted-foreground" />
        )}
      </button>
    </div>
  );
}
