import { View, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { FlatList } from "react-native";
import { RegisterDataPage } from "../../../utils/constant/RegisterDataPage";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import ProfileIoBackButton from "../../atoms/ProfileIoBackButton";
import { Fonts } from "../../../themes/Fonts";
import { Colors } from "../../../themes/Colors";
import ProfileIoForm from "../../molecules/ProfileIoForm";
import { useForm } from "react-hook-form";
import { useRecoilValue, useRecoilState } from "recoil";
import { navState } from "../../../store/NavState";
import { IsLoadingModal, IsLoading } from "../../../store/LoadingState";
import { ExpandingDot } from "react-native-animated-pagination-dots";
import { Animated } from "react-native";
import { API_ACCESS } from "../../../utils/config/Endpoint";
import LoadingScreen from "../../templates/LoadingScreen";
import { ToastAndroid } from "react-native";
import LoadingModal from "../../templates/LoadingModal";

const WIDTH = Dimensions.get("window").width;

const RegisterSlider = () => {
  const { control, handleSubmit } = useForm();

  const nav = useRecoilValue(navState);
  const [isLoading, setIsLoading] = useRecoilState(IsLoading);
  const [isLoadingModal, setIsLoadingModal] = useRecoilState(IsLoadingModal);

  const listPage = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      await fetch(API_ACCESS.allSpeciality, {
        method: "GET",
        mode: "cors",
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.message === "Data fetched!") {
            setData(json.data);
          }
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchData();
  }, []);

  useEffect(() => {
    Object.assign(RegisterDataPage[2].dataInput[0], {
      dataDropdown: data,
    });
  }, [data]);

  const submit = async (data) => {
    setIsLoadingModal(true);

    await fetch(API_ACCESS.register, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        dob: data.dob,
        speciality: data.speciality,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.message === "Registration success!") {
          nav.navigate("Login");
        }

        ToastAndroid.show(json.message, ToastAndroid.LONG);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoadingModal(false);
      });
  };

  if (isLoading === true || data === null) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={RegisterDataPage}
        ref={listPage}
        horizontal
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        renderItem={({ item, index }) => (
          <View
            style={[styles.container, { backgroundColor: item.background }]}
          >
            <View style={styles.header}>
              <ProfileIoBackButton
                white
                onPress={
                  index === 0
                    ? () => nav.navigate("Login")
                    : index === 1
                    ? () =>
                        listPage.current.scrollToIndex({
                          animation: true,
                          index: 0,
                        })
                    : () =>
                        listPage.current.scrollToIndex({
                          animation: true,
                          index: 1,
                        })
                }
              />

              <Text style={styles.title}>{item.title}</Text>
            </View>

            <ProfileIoForm
              dataInput={item.dataInput}
              control={control}
              btnLabel={index !== 2 ? "Next" : "Confirm"}
              onPress={
                index === 2
                  ? handleSubmit(submit)
                  : () => {
                      if (index === 0) {
                        listPage.current.scrollToIndex({
                          animation: true,
                          index: 1,
                        });
                      } else if (index === 1) {
                        listPage.current.scrollToIndex({
                          animation: true,
                          index: 2,
                        });
                      }
                    }
              }
            />
          </View>
        )}
      />

      <ExpandingDot
        data={RegisterDataPage}
        expandingDotWidth={30}
        scrollX={scrollX}
        inActiveDotOpacity={1}
        activeDotColor={Colors.Orange}
        inActiveDotColor={Colors.White}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 50,
          marginHorizontal: 2,
        }}
        containerStyle={{
          position: "absolute",
          top: 280,
        }}
      />

      <LoadingModal visible={isLoadingModal} />
    </View>
  );
};

export default RegisterSlider;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: WIDTH,
  },
  header: {
    paddingHorizontal: 31,
    paddingTop: 41,
    marginBottom: 110,
  },
  title: {
    fontFamily: Fonts.Bold,
    fontSize: 28,
    color: Colors.White,
    marginTop: 49,
  },
});
