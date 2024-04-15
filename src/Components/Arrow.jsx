const Arrow = () => {
  return (
    <>
      <style>
        {`
          @keyframes blink {
            0% {opacity: 1;}
            50% {opacity: 0;}
            100% {opacity: 1;}
          }

          .arrow {
            position: absolute;
            top: 84%;
            left: 95%;
            width: 10px;
            height: 10px;
            border: 1px solid #ffffff;
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 3px;
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            animation: blink 1300ms linear infinite;
            z-index: 100;
          }

          .arrow::before {
            content: '';
            position: absolute;
            top: 100%;
            left: 100%;
            transform: translate(-50%, -50%);
            width: 70%;
            height: 70%;
            border: inherit;
            border-width: 0 3px 3px 0;
            padding: inherit;
          }
        `}
      </style>
      <div className="arrow"></div>
    </>
  );
};

export default Arrow;