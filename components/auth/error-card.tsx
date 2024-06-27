import CardWrapper from "@/components/auth/card-wrappers";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const ErrorCard = () => {
    return (
        <CardWrapper
            headerLabel="Oops! Something went wrong!"
            backButtonHrfe="/auth/login"
            backButtonLabel="Back to login"
        >
            <div className="w-full flex justify-center items-center">
                <ExclamationTriangleIcon className="text-destructive" />
            </div>
        </CardWrapper>
    );
};

export default ErrorCard;
