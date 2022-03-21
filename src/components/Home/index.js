import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Layout from "common/Layout";
import { pushNotification } from "utils/notifications";
import Texts from "constants/staticText";
import { useSelector } from "react-redux";

const Home = (props) => {
  const count = useSelector((state) => state.count);

  const { getList, incrementCount, decrementCount, incrementDouble } = props;
  return (
    <Layout>
      {count}
      <Button onClick={() => getList()} style={{ marginTop: "250px" }}>
        {Texts.CHECK_API_CALL}
      </Button>
      <Button onClick={() => incrementCount()} style={{ marginTop: "250px" }}>
        {Texts.INCREMENT_COUNT}
      </Button>
      <Button onClick={() => decrementCount()} style={{ marginTop: "250px" }}>
        {Texts.DECREMENT_COUNT}
      </Button>
      <Button
        onClick={() => pushNotification("test", "success")}
        style={{ marginTop: "250px" }}
      >
        {Texts.GET_NOTIFICATION}
      </Button>
      <Button onClick={() => incrementDouble()} style={{ marginTop: "250px" }}>
        {Texts.DOUBLE_COUNT}
      </Button>
    </Layout>
  );
};

Home.propTypes = {
  getList: PropTypes.func,
};

export default Home;
