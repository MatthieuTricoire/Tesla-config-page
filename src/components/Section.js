// import { useState } from "react";

// const Section = (props) => {
//   return (
//     <section>
//       {props.data.map((model, index) => {
//         return (
//           <button>
//             {model.model} - {model.price}$
//           </button>
//         );
//       })}
//     </section>
//   );
// };

//! type Item{
//! text:string,
//! price:number}
// ! type Props{
// ! data:Item[],
//! onSelection:(v:string)=>void
//! selection?:string
//! }
//! const Section = (props:Props)=>

const Section = (props) => {
  return (
    //! class selected : if(elem.text===props.selection)

    <section>
      <h2>Select your {props.title}</h2>
      <div className="buttons">
        {props.data.map((elem, index) => {
          return (
            <button
              className={index === props.selection && "test"}
              key={index}
              onClick={() => {
                props.onSelection(index);
              }}
            >
              {elem.text} - {elem.price}$
            </button>
          );
        })}
      </div>
    </section>
  );
};
export default Section;
