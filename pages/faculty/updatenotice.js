export default function UpdateNotice() {
  return (
    <>
      <h2>Update Notice</h2>
      <form>
        <div>
          <label htmlFor=" id"> Id</label>
          <input type="text" name=" id" id=" id" />
        </div>
        <div>
          <label htmlFor=" subject"> Subject</label>
          <input type="text" name=" subject" id=" subject" />
        </div>
        <div>
          <label htmlFor=" details"> Details</label>
          <input type="text" name=" details" id=" details" />
        </div>
        <button type="submit">Upadate Notice</button>
      </form>
    </>
  );
}
