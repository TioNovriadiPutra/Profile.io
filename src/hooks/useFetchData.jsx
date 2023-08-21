import { ToastAndroid } from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../utils/context/AuthContext";
import { useRecoilValue } from "recoil";
import { navState } from "../store/NavState";

const useFetchData = () => {
  const { token } = useContext(AuthContext);
  const nav = useRecoilValue(navState);

  const [data, setData] = useState(null);

  const fetchFunction = async (
    url,
    method,
    auth = false,
    form = false,
    body = null,
    dest = null,
    success = null,
    paramsQuiz = false
  ) => {
    setData(null);

    await fetch(url, {
      method,
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type":
          form === true ? "multipart/form-data" : "application/json",
        Authorization: auth === true ? `Bearer ${token}` : null,
      },
      body: body === null ? null : form === true ? body : JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((json) => {
        if (method === "GET") {
          setData(json.data);
        } else {
          ToastAndroid.show(json.message, ToastAndroid.LONG);
          if (dest !== null) {
            if (json.message === success) {
              nav.navigate(
                dest,
                paramsQuiz === false
                  ? null
                  : {
                      finalScore: json.score,
                    }
              );
            }
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return {
    data,
    fetchFunction,
  };
};

export default useFetchData;
