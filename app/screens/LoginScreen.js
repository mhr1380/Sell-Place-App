import { View, StyleSheet, Text, Image } from "react-native";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import { Formik } from "formik";
import MyButton from "../components/MyButton";
import Color from "../config/Color";
import * as yup from "yup";
const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(6).label("Password"),
});

const initialValues = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
        <Screen style={{ alignItems: "center" }}>
          <View style={styles.container}>
            <Image
              source={require("../assets/logo-red.png")}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginTop: 50,
                marginBottom: 50,
              }}
            />
            <AppTextInput
              onChangeText={handleChange("email")}
              icon="email"
              placeholder="Email"
              error={errors.email}
              touched={touched.email}
              onBlur={() => setFieldTouched("email")}
            />
            <AppTextInput
              onChangeText={handleChange("password")}
              icon="lock"
              placeholder="Password"
              error={errors.password}
              touched={touched.password}
              onBlur={() => setFieldTouched("password")}
              secureTextEntry
            />
            <MyButton
              title="Login"
              backgroundColor={Color.primary}
              color={Color.white}
              onPress={handleSubmit}
            />
          </View>
        </Screen>
      )}
    </Formik>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
});
export default LoginScreen;
