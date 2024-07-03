import CardWrapper from "./auth/card-wrappers";
import { FadeLoader } from "react-spinners";

const NotFoundForm = () => {
    return (
        <CardWrapper
            title="😓 Not found"
            headerLabel="Page not found"
            backButtonHrfe="/"
            backButtonLabel="Back to home"
        >
            <div className="flex items-center justify-center">
                <FadeLoader />
            </div>
        </CardWrapper>
    );
};

export default NotFoundForm;
