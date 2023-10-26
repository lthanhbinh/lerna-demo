import React, { Suspense } from "react";
import { Spinner } from "../components/Spinner/Spinner";

interface ISuspenseRouteProps {
  children: React.ReactNode;
}

export const SuspenseRoute = ({ children }: ISuspenseRouteProps) => {
  return (
    <Suspense
      fallback={
        <div className="loader-full-screen">
          <Spinner />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};
