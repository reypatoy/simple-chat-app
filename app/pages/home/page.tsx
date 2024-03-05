import CustomLayout from "@/app/layouts/customLayout";

export default function Home() {
    return (
      <CustomLayout>
        <div className="flex h-full w-full items-center">
            <div className="w-3/4 h-full bg-yellow-100">
              hello
            </div>
            <div className="w-1/4 h-full bg-yellow-200">
              hello
            </div>
        </div>
      </CustomLayout>
    );
  }
  