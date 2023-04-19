import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Div } from "../components";
import { AppState } from "../store";
import * as R from "../store/remoteUser";
import { Button } from "../theme/daisyui";
// import * as D from "../data";
import * as D from "../data";

export default function RemoteUserTest() {
  const dispatch = useDispatch();
  const user = useSelector<AppState, R.State>(({ remoteUser }) => remoteUser);
  // const [loding , toggleLoading] = useTogg
  // const [error, setError] = useState<Error | null>(null);

  const getRomoteUser = useCallback(() => {
    const users: D.IUser = D.makeRandomUser();
    dispatch(R.setUser(users));
  }, [dispatch]);

  const changeName = useCallback(() => {
    dispatch(R.changeName(user.name));
  }, [dispatch]);

  const changeEmail = useCallback(() => {
    dispatch(R.changeEmail(user.email));
  }, [dispatch]);

  const changePicture = useCallback(() => {
    const picture: D.PictureType = D.makeRandomPicture();
    dispatch(R.changePicture(picture));
  }, [dispatch]);

  useEffect(() => {
    // alert(JSON.stringify(user));
  }, [user]);

  return (
    <section className="mt-4">
      <Div className="">RemoteUserTest</Div>
      <div className="flex justify-center mt-4">
        <Button className="btn-sm btn btn-primary" onClick={getRomoteUser}>
          get remote user
        </Button>
        <Button className="ml-4 btn-sm btn btn-accent" onClick={changeName}>
          change name
        </Button>
        <Button className="ml-4 btn-sm btn btn-success" onClick={changeEmail}>
          change email
        </Button>
        <Button
          className="ml-4 btn-sm btn btn-secondary"
          onClick={changePicture}
        >
          change picture
        </Button>
      </div>
      <div className="flex justify-center p-4 mt-4">
        <div>
          <img src={user.picture.large} />
        </div>
        <div className="ml-4">
          <p className="text-xl text-bold">
            {user.name.title}. {user.name.first} {user.name.last}
          </p>
          <p className="italic text-gray-600">{user.email}</p>
        </div>
      </div>
    </section>
  );
}
