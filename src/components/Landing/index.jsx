import "./style.css";
import { useState, useEffect } from "react";

let waveSets;

const Landing = () => {
  const [waveIdx, setWaveIdx] = useState(0);
  const [renderToggle, setRenderToggle] = useState(false);
  const [midFlip, setMidFlip] = useState("");
  const [postFlip, setBotFlip] = useState("");

  // wave animation every 5 seconds
  useEffect(() => {
    const waveAnim = setInterval(() => {
      setWaveIdx((old) => (old + 1) % waveSets.length);
      setMidFlip(Math.random() <= 0.5 ? "" : "flip");
      setBotFlip(Math.random() <= 0.5 ? "" : "flip");
      setRenderToggle(true);
      setRenderToggle(false);
    }, 5500);

    return () => clearInterval(waveAnim);
  }, []);

  return (
    <div id="landing-wrapper">
      {/* Foreground - text, buttons, etc */}
      <div id="landing-fg">
        <div id="landing-fg-wrapper">
          <h1 id="landing-title">TritonHacks 2022</h1>
          <div id="landing-buttons">
            <a href="." className="landing-button">
              APPLY
            </a>
            <a href="." className="landing-button">
              VOLUNTEER
            </a>
          </div>
        </div>
      </div>

      {/* Midground - static images */}
      <div id="landing-mg"></div>

      {/* Background - animated waves */}
      <div id="landing-bg">
        {/* top wave */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="25 200 1440 5000"
          id="top-wave"
        >
          <animate
            attributeName="viewBox"
            values="25 200 1440 5000;150 200 1440 5000;25 200 1440 5000"
            dur="7s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
            repeatCount="indefinite"
          />
          <path
            d="M7.48,318.55l23-311,1567.15,15.7V416.59c-3.59,2.41-76.6,39.34-94.4,47.57a449.7,449.7,0,0,1-52.36,20.54c-16.41,5.18-29.93,8-38.34,8-39.45,0-64.61-20.07-91.25-44.23l-6.35-5.79h0c-24.56-22.48-51.48-47.12-91.74-56.29-16.83-3.83-28-3.84-39.51-2.88-3,.25-5.9.55-8.92.86-4.8.5-9.83,1-15.63,1.38l-21.6.46c-22.8-1.92-56.22-7.36-81.91-18.26-46.34-19.65-92.61-36.47-192.55,1-82.87,26.59-131.53,10.75-175.37-3.62-12.9-4.23-25.46-8.32-38.32-11.14-143.87-31.55-219.41.51-292.28,31.33-67.88,28.77-133.43,56.54-249.72,31l-9.84-2.17C91.36,413,13.6,373.29,7.48,372"
            fill="#00bae9"
            stroke="#fff"
            strokeWidth="18"
          />
        </svg>

        {renderToggle ? (
          <></>
        ) : (
          <>
            {/* middle wave */}
            <div id="mid-wave" className={`wave-container ${midFlip}`}>
              {waveSets[waveIdx].mid}
            </div>
            {/* bottom wave */}
            <div id="bot-wave" className={`wave-container ${postFlip}`}>
              {waveSets[waveIdx].bot}
            </div>
            {/* post wave */}
            <div id="post-wave" className={`wave-container ${postFlip}`}>
              {" "}
              className="wave-container" {waveSets[waveIdx].post}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Landing;

waveSets = [
  {
    mid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="60 55 1444.51 500.21">
        <path
          d="M15.35,323.15,7.69,7.58,1536.54,22.9l-26.3,425.87c-3.59,2.41-12,7.17-29.8,15.4a450.4,450.4,0,0,1-52.36,20.54c-16.41,5.18-29.93,8-38.34,8-39.45,0-64.61-20.07-91.25-44.23l-6.35-5.79h0c-24.56-22.48-51.48-47.12-91.74-56.29-16.83-3.83-28-3.84-39.51-2.88-3,.25-5.9.55-8.92.86-4.8.5-9.83,1-15.63,1.38l-21.6.46c-22.8-1.92-56.22-7.36-81.91-18.26-46.34-19.65-92.61-36.47-192.55,1-82.87,26.59-131.53,10.75-175.37-3.62-12.9-4.23-25.46-8.32-38.32-11.14-143.87-31.55-219.41.51-292.28,31.33-67.88,28.77-133.43,56.54-249.72,31l-9.84-2.17c-6.16-1.37-12.27-2.73-18.39-4"
          fill="#00bae9"
          stroke="#fff"
          strokeWidth="18"
        />
      </svg>
    ),
    bot: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="15 0 1440 646"
        fill="none"
      >
        <path
          d="M-190 -30H1637V328.863C1636.83 329.236 1636.64 329.662 1636.42 330.141C1635.46 332.244 1634.02 335.351 1632.12 339.324C1628.33 347.27 1622.71 358.673 1615.45 372.431C1600.92 399.966 1579.84 436.833 1553.64 474.259C1527.4 511.728 1496.24 549.469 1461.59 578.964C1426.89 608.508 1389.36 629.216 1350.33 633.819C1286.3 641.372 1234.98 614.426 1183.25 576.466C1167.98 565.26 1153.16 553.482 1138.01 541.44C1127.15 532.807 1116.11 524.039 1104.62 515.249C1077.55 494.542 1048.95 474.551 1017.42 459.028C968.252 434.824 934.686 429.111 899.826 429.715C885.613 429.961 871.165 431.262 855.71 432.653C852.641 432.929 849.533 433.209 846.379 433.485C827.202 435.162 805.825 436.75 780 436.75C728.531 436.75 680.044 418.172 629.814 398.926C618.542 394.607 607.183 390.255 595.682 386.071C533.855 363.58 468.958 346.645 398.337 374.445C370.74 385.309 346.3 398.847 322.594 412.804C316.803 416.214 311.075 419.636 305.359 423.051C287.511 433.714 269.785 444.305 250.661 454.197C200.714 480.033 141.881 500.715 52.996 500.75C-34.3209 500.785 -95.0644 457.779 -134.324 414.208C-153.967 392.408 -168.118 370.572 -177.352 354.187C-181.963 346.004 -185.332 339.209 -187.534 334.495C-188.634 332.138 -189.442 330.305 -189.967 329.081C-189.978 329.054 -189.989 329.028 -190 329.003V-30Z"
          fill="#00BAE9"
          stroke="white"
          strokeWidth="18"
        />
      </svg>
    ),
    post: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="15 0 1440 646"
        fill="none"
      >
        <path
          d="M-190 -30H1637V328.863C1636.83 329.236 1636.64 329.662 1636.42 330.141C1635.46 332.244 1634.02 335.351 1632.12 339.324C1628.33 347.27 1622.71 358.673 1615.45 372.431C1600.92 399.966 1579.84 436.833 1553.64 474.259C1527.4 511.728 1496.24 549.469 1461.59 578.964C1426.89 608.508 1389.36 629.216 1350.33 633.819C1286.3 641.372 1234.98 614.426 1183.25 576.466C1167.98 565.26 1153.16 553.482 1138.01 541.44C1127.15 532.807 1116.11 524.039 1104.62 515.249C1077.55 494.542 1048.95 474.551 1017.42 459.028C968.252 434.824 934.686 429.111 899.826 429.715C885.613 429.961 871.165 431.262 855.71 432.653C852.641 432.929 849.533 433.209 846.379 433.485C827.202 435.162 805.825 436.75 780 436.75C728.531 436.75 680.044 418.172 629.814 398.926C618.542 394.607 607.183 390.255 595.682 386.071C533.855 363.58 468.958 346.645 398.337 374.445C370.74 385.309 346.3 398.847 322.594 412.804C316.803 416.214 311.075 419.636 305.359 423.051C287.511 433.714 269.785 444.305 250.661 454.197C200.714 480.033 141.881 500.715 52.996 500.75C-34.3209 500.785 -95.0644 457.779 -134.324 414.208C-153.967 392.408 -168.118 370.572 -177.352 354.187C-181.963 346.004 -185.332 339.209 -187.534 334.495C-188.634 332.138 -189.442 330.305 -189.967 329.081C-189.978 329.054 -189.989 329.028 -190 329.003V-30Z"
          fill="#CCC6B6"
          stroke="#CCC6B6"
          strokeWidth="18"
        />
      </svg>
    ),
  },
  {
    mid: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 120 1440 646"
        fill="none"
      >
        <path
          d="M-190 -30H1637V328.863C1636.83 329.236 1636.64 329.662 1636.42 330.141C1635.46 332.244 1634.02 335.351 1632.12 339.324C1628.33 347.27 1622.71 358.673 1615.45 372.431C1600.92 399.966 1579.84 436.833 1553.64 474.259C1527.4 511.728 1496.24 549.469 1461.59 578.964C1426.89 608.508 1389.36 629.216 1350.33 633.819C1286.3 641.372 1234.98 614.426 1183.25 576.466C1167.98 565.26 1153.16 553.482 1138.01 541.44C1127.15 532.807 1116.11 524.039 1104.62 515.249C1077.55 494.542 1048.95 474.551 1017.42 459.028C968.252 434.824 934.686 429.111 899.826 429.715C885.613 429.961 871.165 431.262 855.71 432.653C852.641 432.929 849.533 433.209 846.379 433.485C827.202 435.162 805.825 436.75 780 436.75C728.531 436.75 680.044 418.172 629.814 398.926C618.542 394.607 607.183 390.255 595.682 386.071C533.855 363.58 468.958 346.645 398.337 374.445C370.74 385.309 346.3 398.847 322.594 412.804C316.803 416.214 311.075 419.636 305.359 423.051C287.511 433.714 269.785 444.305 250.661 454.197C200.714 480.033 141.881 500.715 52.996 500.75C-34.3209 500.785 -95.0644 457.779 -134.324 414.208C-153.967 392.408 -168.118 370.572 -177.352 354.187C-181.963 346.004 -185.332 339.209 -187.534 334.495C-188.634 332.138 -189.442 330.305 -189.967 329.081C-189.978 329.054 -189.989 329.028 -190 329.003V-30Z"
          fill="#00BAE9"
          stroke="white"
          strokeWidth="18"
        />
      </svg>
    ),
    bot: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="60 55 1444.51 500.21"
        style={{
          borderTop: "12rem solid #00bae9",
          boxSizing: "border-box",
        }}
      >
        <path
          d="M15.35,323.15,7.69,7.58,1536.54,22.9l-26.3,425.87c-3.59,2.41-12,7.17-29.8,15.4a450.4,450.4,0,0,1-52.36,20.54c-16.41,5.18-29.93,8-38.34,8-39.45,0-64.61-20.07-91.25-44.23l-6.35-5.79h0c-24.56-22.48-51.48-47.12-91.74-56.29-16.83-3.83-28-3.84-39.51-2.88-3,.25-5.9.55-8.92.86-4.8.5-9.83,1-15.63,1.38l-21.6.46c-22.8-1.92-56.22-7.36-81.91-18.26-46.34-19.65-92.61-36.47-192.55,1-82.87,26.59-131.53,10.75-175.37-3.62-12.9-4.23-25.46-8.32-38.32-11.14-143.87-31.55-219.41.51-292.28,31.33-67.88,28.77-133.43,56.54-249.72,31l-9.84-2.17c-6.16-1.37-12.27-2.73-18.39-4"
          fill="#00bae9"
          stroke="#fff"
          strokeWidth="18"
        />
      </svg>
    ),
    post: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="60 55 1444.51 500.21"
        fill="none"
        style={{
          borderTop: "12rem solid #CCC6B6",
          boxSizing: "border-box",
        }}
      >
        <path
          d="M15.35,323.15,7.69,7.58,1536.54,22.9l-26.3,425.87c-3.59,2.41-12,7.17-29.8,15.4a450.4,450.4,0,0,1-52.36,20.54c-16.41,5.18-29.93,8-38.34,8-39.45,0-64.61-20.07-91.25-44.23l-6.35-5.79h0c-24.56-22.48-51.48-47.12-91.74-56.29-16.83-3.83-28-3.84-39.51-2.88-3,.25-5.9.55-8.92.86-4.8.5-9.83,1-15.63,1.38l-21.6.46c-22.8-1.92-56.22-7.36-81.91-18.26-46.34-19.65-92.61-36.47-192.55,1-82.87,26.59-131.53,10.75-175.37-3.62-12.9-4.23-25.46-8.32-38.32-11.14-143.87-31.55-219.41.51-292.28,31.33-67.88,28.77-133.43,56.54-249.72,31l-9.84-2.17c-6.16-1.37-12.27-2.73-18.39-4"
          fill="#CCC6B6"
          stroke="#CCC6B6"
          strokeWidth="18"
        />
      </svg>
    ),
  },
];
