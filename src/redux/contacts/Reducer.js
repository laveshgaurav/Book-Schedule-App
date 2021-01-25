import { AsyncStorage } from "react-native";

const initState = {
  slot: [
    {
      time: "9 am",
      firstName: "lavesh",
      lastName: "gaurav",
      phoneNumber: "7004810286",
    },
    { time: "10 am", firstName: "", lastName: "", phoneNumber: "" },
    { time: "11 am", firstName: "", lastName: "", phoneNumber: "" },
    { time: "12 pm", firstName: "", lastName: "", phoneNumber: "" },
    { time: "1 pm", firstName: "", lastName: "", phoneNumber: "" },
    { time: "2 pm", firstName: "", lastName: "", phoneNumber: "" },
    { time: "3 pm", firstName: "", lastName: "", phoneNumber: "" },
    { time: "4 pm", firstName: "", lastName: "", phoneNumber: "" },
    { time: "5 pm", firstName: "", lastName: "", phoneNumber: "" },
    { time: "6 pm", firstName: "", lastName: "", phoneNumber: "" },
  ],
};

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "BOOK-SLOT":
      console.log(action.payload);

      return {
        ...state,
        slot: state.slot.map((data) =>
          data.time === action.payload.time
            ? {
                time: action.payload.time,
                firstName: action.payload.fn,
                lastName: action.payload.ln,
                phoneNumber: action.payload.ph,
              }
            : data
        ),
      };

    default:
      return state;
  }
};

export default Reducer;
