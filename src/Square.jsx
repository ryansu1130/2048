import "./Square.css";
export default function Square({ number }) {
  let currRenderNum = null;
  const num2 = { backgroundColor: "#B0ECF4" };
  const num4 = { backgroundColor: "#3AD0B5" };
  const num8 = { backgroundColor: "#436EDC" };
  const num16 = { backgroundColor: "#F5B6FF" };
  const num32 = { backgroundColor: "#C274FF" };
  const num64 = { backgroundColor: "#F843DB" };
  const num128 = { backgroundColor: "#FFCEA1" };
  const num256 = { backgroundColor: "#FFA361" };
  const num512 = { backgroundColor: "#F8BE26" };
  const num1024 = { backgroundColor: "#A6FB51" };
  const num2048 = { backgroundColor: "#F7FB41" };
  const num4096 = { backgroundColor: "#FE4141" };
  const num8184 = { backgroundColor: "#A42562" };
  const num16368 = { backgroundColor: "#817C4C" };

  switch (number) {
    case 2:
      currRenderNum = num2;
      break;

    case 4:
      currRenderNum = num4;
      break;

    case 8:
      currRenderNum = num8;
      break;

    case 16:
      currRenderNum = num16;
      break;

    case 32:
      currRenderNum = num32;
      break;

    case 64:
      currRenderNum = num64;
      break;

    case 128:
      currRenderNum = num128;
      break;

    case 256:
      currRenderNum = num256;
      break;

    case 512:
      currRenderNum = num512;
      break;

    case 1024:
      currRenderNum = num1024;
      break;

    case 2048:
      currRenderNum = num2048;
      break;

    case 4096:
      currRenderNum = num4096;
      break;

    case 8184:
      currRenderNum = num8184;
      break;

    case 16368:
      currRenderNum = num16368;
      break;

    default:
      currRenderNum = { backgroundColor: "white" };
  }

  return (
    <div style={currRenderNum} id="SquareContainer">
      <span id="newNumber">{number}</span>
    </div>
  );
}
