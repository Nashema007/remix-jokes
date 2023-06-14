const JokesNew = () => {

  return (
    <div className="m-5">
      <p className="text-3xl text-left">Add your own hilarious joke</p>
      <form method="post">
        <div className="m-2.5 text-left flex">
          <label className="text-2xl mr-7"> Name:</label>
          <input className="rounded-md form-input" name="name" type="text"/>
        </div>
        <div className="m-2.5 flex">
          <label className="text-2xl mr-1">Content:</label>
          <textarea className="rounded-md form-textarea" name="content"/>
        </div>
        <button className="m-2.5 w-96 h-8 bg-black text-white font-normal rounded-md" type="submit">Add</button>
      </form>
    </div>
  )
}

export default JokesNew