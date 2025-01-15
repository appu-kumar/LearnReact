import { useState, useMemo} from "react";
const Test = () => {
  const [num, setNum] = useState(0);
  const [fact, setFact] = useState(1);
  const [toggle,setToggle] = useState(false);

  function handleChange(e) {
    setNum(e.target.value);
  }

  const chachedValue = useMemo(
    () => {
        console.log('coming from cached')
       function calcFact(num) {
        if (num <= 1) {
          return 1;
        }

        return num * calcFact(num - 1);
      }

      return calcFact(num);
    },
    [num]
  );

  function handleClick() {
    setFact(chachedValue);
  }

  return (
    <div className={toggle?"bg-black text-white":"bg-white-500"}>
      {/* UI part */}
      <p>Test</p>
      <label>Enter Number: </label>
      <input
        type="number"
        className="border border-black"
        value={num}
        onChange={handleChange}
      />
      <button className="p-4 m-4" onClick={handleClick}>
        Get Fact
      </button>
      <span className="border border-black mx-4">{fact}</span>
      <button onClick={()=>setToggle(!toggle)}>Get Dark/Light</button>
    </div>
  );
};

export default Test;
