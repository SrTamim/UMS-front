export default function RequestRoom() {
  return (
    <>
      <h2>Request Room</h2>
      <form>
        <div>
          <label htmlFor=" room"> Room</label>
          <input type="text" name=" room" id=" room" />
        </div>
        <div>
          <label htmlFor=" date"> Date</label>
          <input type="text" name=" date" id=" date" />
        </div>
        <div>
          <label htmlFor=" time"> Time</label>
          <input type="text" name=" time" id=" time" />
        </div>
        <button type="submit">Request Room</button>
      </form>
    </>
  );
}
