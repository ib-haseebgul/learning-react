// import Select from "react-select";
// import CreatableSelect from "react-select/creatable";
import AsyncSelect from "react-select/async";

export default function React_Select() {
  return (
    <div style={{ maxWidth: "300px" }}>
      <AsyncSelect
        loadOptions={(input) =>
          fetch(`https://jsonplaceholder.typicode.com/users?username=${input}`)
            .then((res) => res.json())
            .then((data) =>
              data.map((user) => ({
                value: user.id,
                label: user.name,
              })),
            )
        }
      />
    </div>
  );
}

// export default function React_Select() {
//   const options = [
//     { value: "Banana", label: "Banana" },
//     { value: "Mango", label: "Mango" },
//     { value: "Orange", label: "Orange" },
//     { value: "Pineapple", label: "Pineapple" },
//     { value: "Grapes", label: "Grapes" },
//     { value: "Watermelon", label: "Watermelon" },
//     { value: "Peach", label: "Peach" },
//     { value: "Cherry", label: "Cherry" },
//     { value: "Blueberry", label: "Blueberry" },
//     { value: "Raspberry", label: "Raspberry" },
//     { value: "Blackberry", label: "Blackberry" },
//     { value: "Papaya", label: "Papaya" },
//     { value: "Guava", label: "Guava" },
//     { value: "Kiwi", label: "Kiwi" },
//   ];
//   const customStyle = {
//     control: (base) => ({
//       ...base,
//       borderColor: "blue",
//     }),
//     option: (base) => ({
//       ...base,
//       borderColor: "blue",
//     }),
//   };
//   return (
//     <div style={{ maxWidth: "300px" }}>
//       <CreatableSelect
//         styles={customStyle}
//         options={options}
//         isSearchable={true}
//         isMulti
//       />
//     </div>
//   );
// }

// export default function React_Select() {
//   const options = [
//     { value: "Banana", label: "Banana" },
//     { value: "Mango", label: "Mango" },
//     { value: "Orange", label: "Orange" },
//     { value: "Pineapple", label: "Pineapple" },
//     { value: "Grapes", label: "Grapes" },
//     { value: "Watermelon", label: "Watermelon" },
//     { value: "Peach", label: "Peach" },
//     { value: "Cherry", label: "Cherry" },
//     { value: "Blueberry", label: "Blueberry" },
//     { value: "Raspberry", label: "Raspberry" },
//     { value: "Blackberry", label: "Blackberry" },
//     { value: "Papaya", label: "Papaya" },
//     { value: "Guava", label: "Guava" },
//     { value: "Kiwi", label: "Kiwi" },
//   ];
//   return (
//     <div style={{ maxWidth: "300px" }}>
//       <Select options={options} isSearchable={true} isMulti />
//     </div>
//   );
// }
