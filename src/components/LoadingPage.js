import LoadingIndicator from "./UI/Loading";

export default function LoadingPage() {
  return (
    <div className="w-screen h-screen page-color place-content-center">
      <div className="flex flex-col items-center w-fit h-fit p-9 m-auto mt-auto">
        <LoadingIndicator />
        <h1 className="text-3xl font-bold text-white lp:text-5xl 2md:text-4xl 2xl:text-6xl xl:text-5xl lg:text-5xl">
          Page Loading...
        </h1>
      </div>
    </div>
  );
}
