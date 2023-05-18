function Error() {
    const Styles = {
      img: {
        width:"80%",
        height:"80%",
        margin:"0 10%",
      },
    };
    return (
      <div>
        <img style={Styles.img} src="images/oops.jpg" />
      </div>
    );
  }
  export default Error;