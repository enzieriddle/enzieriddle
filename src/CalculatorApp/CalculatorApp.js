import { useState } from "react";

import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

const calcBtnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

export default function CalcApp() {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const resetClickHandler = () => {
    setCalc((prevCalc) => {
      return {
        sign: "",
        num: 0,
        res: 0,
      };
    });
  };

  const invertClickHandler = () => {
    setCalc((prevCalc) => {
      return {
        sign: calc.sign,
        num: calc.num * -1,
        res: calc.res,
      };
    });
  };

  const percentClickHandler = () => {
    setCalc((prevCalc) => {
      return {
        sign: calc.sign,
        num: calc.num * 0.01,
        res: calc.res,
      };
    });
  };

  const equalsClickHandler = ({ target }) => {
    const { value, name } = target;
    setCalc((prevCalc) => {
      if (calc.res === 0 && calc.sign === "/") {
        return {
          ...calc,
          res: "Cannot divide by 0",
          num: 0,
        };
      } else if (calc.sign === "+") {
        console.log(calc.num + calc.res);
        return {
          ...calc,
          res: calc.num + prevCalc.res,
          num: 0,
        };
      } else if (calc.sign === "-") {
        return {
          ...calc,
          res: calc.res - prevCalc.num,
          num: 0,
        };
      } else if (calc.sign === "X") {
        return {
          ...calc,
          res: calc.num * prevCalc.res,
          num: 0,
        };
      } else if (calc.sign === "/") {
        return {
          ...calc,
          res: calc.num / prevCalc.res,
          num: 0,
        };
      }
    });
  };

  const signClickHandler = (e) => {
    e.preventDefault();

    const value = e.target.innerHTML;

    console.log(value);
    setCalc((prevCalc) => {
      if (!calc.res && calc.num) {
        return {
          ...calc,
          sign: value,
          res: calc.num,
          num: 0,
        };
      } else {
        console.log("else");
        return {
          ...calc,
          sign: value,
          res: calc.res,
          num: 0,
        };
      }
    });
  };

  const commaClickHandler = (e) => {
    e.preventDefault();

    const value = e.target.innerHTML;

    setCalc((prevCalc) => {
      return {
        ...calc,
        num: prevCalc.num + value,
      };
    });
  };

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    // if (calc.num.length < 16) {
    setCalc(() => {
      if (calc.num === 0 && value === "0") {
        return {
          ...calc,
          num: 0,
          res: !calc.sign ? 0 : calc.res,
        };
      } else if (calc.num % 1 === 0) {
        return {
          ...calc,
          num: Number(calc.num + value),
          res: !calc.sign ? 0 : calc.res,
        };
      } else {
        return {
          ...calc,
          num: calc.num + value,
          res: !calc.sign ? 0 : calc.res,
        };
      }
    });
    // }
  };

  return (
    <Wrapper>
      <Screen value={calc.num ? calc.num : calc.res} />
      <ButtonBox>
        {calcBtnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={
                btn === "C"
                  ? resetClickHandler
                  : btn === "+-"
                  ? invertClickHandler
                  : btn === "%"
                  ? percentClickHandler
                  : btn === "="
                  ? equalsClickHandler
                  : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                  ? signClickHandler
                  : btn === "."
                  ? commaClickHandler
                  : numClickHandler
              }
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
}
