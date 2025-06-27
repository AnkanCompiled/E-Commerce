import { Suspense, lazy } from "react";
import { notFound } from "next/navigation";

const MyProfile_Component = lazy(() =>
  import("@/components/MyProfile_Component")
);

const content = {
  my_profile: {
    name: "Profile",
    Component: MyProfile_Component,
  },
};

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const type = params.type || "my_profile";
  if (type === "my_profile") return;
  const name = content[type]?.name || "Profile";
  const description =
    content[type]?.description || "User profile and settings page";
  return {
    title: `${name} Page`,
    description: description,
  };
}

export default async function Profile({ searchParams }) {
  const params = await searchParams;
  const type = params.type || "my_profile";
  const SelectedComponent = content[type]?.Component;

  if (!SelectedComponent) {
    return notFound();
  }

  return (
    <Suspense fallback={<div className="loader-spinner" />}>
      <SelectedComponent />
    </Suspense>
  );
}
