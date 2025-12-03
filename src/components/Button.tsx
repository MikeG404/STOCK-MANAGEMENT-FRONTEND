import clsx from "clsx";

const colorClasses = {
    create: "text-white bg-blue-500 hover:bg-blue-700",
    edit: "text-white bg-green-500 hover:bg-green-700",
    delete: "text-white bg-red-500 hover:bg-red-700",
}

const sizeClasses = {
    small: "text-sm py-2 px-4",
    medium: "text-md py-3 px-5",
    large: "text-lg py-4 px-6",
}

function Button({children, size = 'small', variant = 'create', className = '', ...props}) {

    const buttonClasses = clsx(
        "rounded-2xl",
        sizeClasses[size],
        colorClasses[variant],
        className
    );

    return (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    );
}

export default Button;