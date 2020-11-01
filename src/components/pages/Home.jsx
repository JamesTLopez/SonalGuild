import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getPosts} from "../../store/actions/TempActions"

function Home(props) {


  return (
    <div className="">
      <h1>Hello from home</h1>
      <button onClick={() => {props.getPosts()}} >Recieve Dudes</button>
    </div>
  );
}

Home.propTypes = {
  posts: PropTypes.array.isRequired,
  getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = ({temp}) => ({
  posts: temp.posts
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
