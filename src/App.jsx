import SearchInput from "./assets/elements/input/SearchInput";
import MainContainer from "./assets/fragments/MainContainer";
import MainLayout from "./assets/layouts/MainLayout";
import { debounce } from "lodash";
import { useEffect, useState } from "react";

function App() {
  const [something, setSomething] = useState([]);
  const [debounceValue, setdebounceValue] = useState("");

  useEffect(() => {
    setSomething(JSON.parse(localStorage.getItem("list")) || []);
  }, []);
  const handleDebounce = debounce((value) => {
    if (value != "") {
      return setdebounceValue(value);
    }
  }, 800);
  useEffect(() => {
    if (debounceValue) {
      setSomething((prevSomething) => {
        const id =
          prevSomething.length > 0
            ? prevSomething[prevSomething.length - 1].id + 1
            : 1;
        const updatedSomething = [
          ...prevSomething,
          { id: id, value: debounceValue },
        ];
        localStorage.setItem("list", JSON.stringify(updatedSomething));
        return updatedSomething;
      });
      setdebounceValue("");
    }
  }, [debounceValue]);
  const addToList = (e) => {
    handleDebounce(e);
  };
  const deleteList = (id) => {
    const existingData = JSON.parse(localStorage.getItem("list"));
    const newList = existingData.filter((item) => item.id !== id);
    localStorage.setItem("list", JSON.stringify(newList));
    setSomething(newList);
  };
  return (
    <>
      <MainLayout>
        <MainContainer list={something} handleClick={deleteList}>
          <SearchInput handleChange={addToList} />
        </MainContainer>
      </MainLayout>
    </>
  );
}

export default App;
