import React, { Suspense } from "react";
import Loading from "./Loading";
import MainLayout from "../layouts/MainLayout";

const PageToRender: React.FC = () => {
  return (
    <MainLayout>
      <div className="w-screen min-h-svh">kudijoij</div>
    </MainLayout>
  );
};

const AboutPage: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <PageToRender />
    </Suspense>
  );
};

export default AboutPage;
