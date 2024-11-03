import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

const SignInPage = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-[#1b1d21] grid place-items-center text-black">
      <Card
        isBlurred
        className="border-none bg-[#e9e9e9] min-w-[80%] min-h-[90%] p-4"
        shadow="sm"
      >
        <div className="w-full h-full flex flex-row text-black">
            <div className="h-full w-[55%]">Login</div>

            <div className="flex w-[45%] h-full bg-white rounded-xl">Hello</div>

        </div>
      </Card>
    </div>
  );
};

export default SignInPage;
