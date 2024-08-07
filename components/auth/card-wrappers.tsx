"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Header from "./header";
import Social from "./social";
import BackButton from "./back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHrfe: string;
  showSocial?: boolean;
  title?: string
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonHrfe,
  backButtonLabel,
  showSocial,
  title
}: CardWrapperProps) => {
  return (
    <Card className="w-[450px] mx-2 shadow-md">
      <CardHeader>
        <Header label={headerLabel} title={title}/>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social/>
        </CardFooter>
      )}
      <CardFooter>
        <BackButton hrfe={backButtonHrfe} label={backButtonLabel}/>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
