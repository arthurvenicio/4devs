import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button className="bg-blue-600 p-1 rounded-sm text-center text-white" {...props}>{children}</button>
    );
}
