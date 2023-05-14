export default function AddNotice() {
  return (
    <>
      <h2>Add Notice</h2>
      <form>
        <div>
          <label htmlFor=" subject"> Subject</label>
          <input type="text" name=" subject" id=" subject" />
        </div>
        <div>
          <label htmlFor=" details"> Details</label>
          <input type="text" name=" details" id=" details" />
        </div>
        <button type="submit">Add Notice</button>
      </form>
    </>
  );
}
