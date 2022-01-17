import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRequest, updateRequest } from "../Redux/action";

const Home = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState({
    c1: false,
    c2: false,
  });
  const [loading, setLoading] = useState(true);
  const [radio, setRadio] = useState("");
  const { get } = useSelector((state) => state);
  console.log(get);
  const handleChange = (e) => {
    setStatus({ ...status, [e.target.id]: e.target.checked });
  };

  const handleChangeRadio = (e) => {
    setRadio(e.target.id);
    dispatch(
      updateRequest({
        checkBox: get.data.checkBox,
        radioButton: e.target.id,
        id: 1,
      })
    );
  };

  const handleUpdateRequest = () => {
    let payload = false;
    if (status.c1 && !status.c2) {
      payload = "checkBox1";
    } else if (!status.c1 && status.c2) {
      payload = "checkBox2";
    } else if (status.c1 && status.c2) {
      payload = "Both";
    } else if (!status.c1 && !status.c2) {
      payload = "None";
    }
    if (payload) {
      dispatch(
        updateRequest({
          checkBox: payload,
          radioButton: radio,
          id: 1,
        })
      );
    }
  };

  useEffect(() => {
    dispatch(getRequest());
    setLoading(true);
  }, []);

  useEffect(() => {
    if (!loading) {
      handleUpdateRequest();
    }
  }, [status]);

  useEffect(() => {
    if (get.isSuccess) {
      setLoading(true);
      switch (get.data?.checkBox) {
        case "checkBox1":
          setStatus({ ...status, c1: true, c2: false });
          break;
        case "checkBox2":
          setStatus({ ...status, c1: false, c2: true });
          break;
        case "Both":
          setStatus({ ...status, c1: true, c2: true });
          break;
        case "None":
          setStatus({ ...status, c1: false, c2: false });
          break;
      }
      setRadio(get?.data?.radioButton);
      setLoading(false);
    }
  }, [get]);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h3>Checkboxes</h3>
        <div>
          <input
            onChange={handleChange}
            type="checkbox"
            id="c1"
            checked={status.c1}
          />
          <label>Checkbox 1</label>
        </div>
        <div>
          <input
            onChange={handleChange}
            type="checkbox"
            id="c2"
            checked={status.c2}
          />
          <label>Checkbox 2</label>
        </div>
        <form>
          <h3>Radio</h3>
          <div>
            <input
              onChange={handleChangeRadio}
              type="radio"
              name="radios"
              id="radio1"
              checked={radio === "radio1"}
            />
            <label htmlFor="radio1">Radio 1</label>
          </div>
          <div>
            <input
              onChange={handleChangeRadio}
              type="radio"
              name="radios"
              id="radio2"
              checked={radio === "radio2"}
            />
            <label htmlFor="radio2">Radio 2</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
