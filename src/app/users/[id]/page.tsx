import UserProfile from "@/components/Modules/User/UserProfile";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div className="min-h-[100vh] flex justify-center items-center">
      <UserProfile userId={id} />;
    </div>
  );
};

export default page;
