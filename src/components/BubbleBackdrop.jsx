const backdropDots = [
  { size: "18rem", top: "8%", left: "-6%", delay: "0s", duration: "18s" },
  { size: "10rem", top: "16%", right: "12%", delay: "2s", duration: "16s" },
  { size: "14rem", top: "42%", left: "6%", delay: "4s", duration: "20s" },
  { size: "12rem", top: "52%", right: "-4%", delay: "1s", duration: "17s" },
  { size: "16rem", top: "74%", left: "22%", delay: "3s", duration: "19s" },
  { size: "11rem", top: "78%", right: "14%", delay: "5s", duration: "15s" }
];

function BubbleBackdrop() {
  return (
    <div className="bubble-backdrop" aria-hidden="true">
      <div className="bubble-backdrop__pattern" />
      {backdropDots.map((dot, index) => (
        <span
          key={index}
          className="bubble-backdrop__orb"
          style={{
            width: dot.size,
            height: dot.size,
            top: dot.top,
            left: dot.left,
            right: dot.right,
            animationDelay: dot.delay,
            animationDuration: dot.duration
          }}
        />
      ))}
    </div>
  );
}

export default BubbleBackdrop;
