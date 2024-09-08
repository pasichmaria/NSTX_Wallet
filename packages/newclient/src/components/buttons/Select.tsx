interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string | undefined;
    containerClassName?: string;
    fullWidth?: boolean;
}
export const Select = ({   label,
                           error,
                           containerClassName = "",
                           className = "",
                           fullWidth = false,
                           children,
                           ...props
                       }: SelectProps) => {
    return (
        <div className={`flex flex-col relative ${containerClassName}`}>
            {label && (
                <label
                    htmlFor={props.id || props.name}
                    className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                    {label}
                </label>
            )}
            <select
                className={`${
                    fullWidth ? "w-full" : ""
                } py-3 px-4 bg-[#2c2c2f] text-gray-200 border border-[#3c3c41] rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00f0ff] ${className} ${
                    error ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-700"
                }`}
                {...props}
            >
                {children}
            </select>
            {error && (
                <span className="mt-1 text-sm text-red-600 dark:text-red-400">
          {error}
        </span>
            )}
        </div>
    );
}