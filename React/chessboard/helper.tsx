export const getColor = (i) => {
    if (i < 9) {
      return i % 2 === 0 ? "black" : "white";
    } else if (i > 8 && i < 16) {
      return i % 2 === 0 ? "white" : "black";
    } else if (i > 16 && i <= 24) {
      return i % 2 === 0 ? "black" : "white";
    } else if (i > 24 && i <= 32) {
      return i % 2 === 0 ? "white" : "black";
    } else if (i > 32 && i <= 40) {
      return i % 2 === 0 ? "black" : "white";
    } else if (i > 40 && i <= 48) {
      return i % 2 === 0 ? "white" : "black";
    } else if (i > 48 && i <= 56) {
      return i % 2 === 0 ? "black" : "white";
    } else if (i > 56 && i <= 64) {
      return i % 2 === 0 ? "white" : "black";
    }
  };
  