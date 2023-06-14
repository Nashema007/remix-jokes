import { Outlet } from "@remix-run/react";

 const JokesRoute = () => {
  return (
    <div className="m-5">
      <h1 className="font-bold text-6xl m-2.5">J🤪KES</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}


export default JokesRoute