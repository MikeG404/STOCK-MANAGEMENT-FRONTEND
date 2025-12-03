import clsx from "clsx";

const colorClasses = {
    create: "text-white bg-blue-500 hover:bg-blue-700",
    edit: "text-white bg-green-500 hover:bg-green-700",
    delete: "text-white bg-red-500 hover:bg-red-700",
}

function Button({children, variant = 'create', className = '', ...props}) {

    const buttonClasses = clsx(
        "font-bold py-4 px-6 rounded-full",
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