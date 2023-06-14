import { Link } from "@remix-run/react"

const IndexRoute = () => {
  return(
    <div className="container m-5">
      <div className="content-normal m-5">
        <h1 className="text-3xl font-bold">
          Remix <span className="text-3xl font-bold">Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="jokes" className="text-lg">Read Jokes</Link>
            </li>
            <li>
              <Link to="jokes/new" className="text-lg">Create new Jokes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default IndexRoute