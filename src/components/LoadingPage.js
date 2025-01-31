import LoadingIndicator from "./UI/Loading";

export default function LoadingPage() {
  return (
    <div className="w-screen h-screen page-color place-content-center">
      <div className="flex flex-col items-center w-fit h-fit p-9 m-auto mt-auto">
        <LoadingIndicator />
      </div>
    </div>
  );
}
