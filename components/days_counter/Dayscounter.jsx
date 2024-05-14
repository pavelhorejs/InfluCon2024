const Dayscounter = () => {
  const entryDate = new Date("10/10/2024");
  const currentDate = new Date();
  const timeDiff = entryDate.getTime() - currentDate.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return (
    <div className="text-black font-bold">
      {daysDiff > 0 ? (
        <p>Začíná za {daysDiff} dní</p>
      ) : (
        <p>Countdown has ended</p>
      )}
    </div>
  );
};
export default Dayscounter;
