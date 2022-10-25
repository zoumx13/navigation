function Like() {
  let [likes, setLikes] = useState(0);
  let [myLike, setMyLike] = useState(false);
  let btn;
  if (myLike == false) {
    btn = "Like";
  } else {
    btn = "Dislike";
  }
  const addLike = (id) => {
    console.log(id);
    if (myLike == false) {
      setMyLike((myLike) => !myLike);
      setLikes(likes + 1);
      console.log("like");
    } else {
      setMyLike((myLike = !myLike));
      setLikes(likes - 1);
      console.log("dislike");
    }
  }
  return (
    <View>
      <Text>Nombre de like : {likes}</Text>
      <Button title={btn} onPress={addLike} />
    </View>
  );
}