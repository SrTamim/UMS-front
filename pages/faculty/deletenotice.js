export default function DeleteNotice() {
  return (
    <>
      <h2>Delete Notice</h2>
      <form>
        <div>
          <label htmlFor=" id"> Id</label>
          <input type="text" name=" id" id=" id" />
        </div>
        <button type="submit">Delete Notice</button>
      </form>
    </>
  );
}
