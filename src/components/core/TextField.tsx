interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode
}

export function TextField({ name, type, placeholder = 'Your placeholder here', icon }: TextFieldProps) {
    return (
        <div className="flex border border-medium-slate rounded-md overflow-hidden">
            {icon && (
                <div className="flex flex-none p-4 items-center justify-center border-medium-slate border-r">
                    {icon}
                </div>
            )}
            <input type={type} name={name} className="w-full p-4 focus:outline-none" placeholder={placeholder} />
        </div>
    )
}