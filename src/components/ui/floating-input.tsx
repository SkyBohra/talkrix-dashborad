import * as React from "react"
import { cn } from "@/lib/utils"

export interface FloatingInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
    ({ className, type, label, ...props }, ref) => {
        return (
            <div className="relative group/field">
                <input
                    type={type}
                    className={cn(
                        "peer block w-full rounded-md border border-white/10 bg-white/5 px-4 pb-2.5 pt-6 text-sm text-white ring-offset-background placeholder:text-transparent focus-visible:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
                        "hover:bg-white/10",
                        className
                    )}
                    placeholder={label} // Required for peer-placeholder-shown
                    ref={ref}
                    {...props}
                />
                <label
                    className={cn(
                        "absolute left-4 top-4 z-10 origin-[0] -translate-y-[12px] scale-75 transform cursor-text text-muted-foreground duration-200",
                        "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100",
                        "peer-focus:-translate-y-[12px] peer-focus:scale-75 peer-focus:text-primary",
                        "pointer-events-none"
                    )}
                >
                    {label}
                </label>
            </div>
        )
    }
)
FloatingInput.displayName = "FloatingInput"

export { FloatingInput }
