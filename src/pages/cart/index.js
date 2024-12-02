import { CartContext } from '@/utils/ContextReducer'
import React, { useContext, useState } from 'react'

// export default function Cart() {
//   const { state, dispatch } = useContext(CartContext)
//   return (
//     <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//       <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//           <tr>
//             <th scope="col" className="px-6 py-3">
//               Product
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Qty
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Price
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Total Price
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Action
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {state.map((data, index) => {
//             return (
//               <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
//                 <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
//                   {data.title}
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="flex items-center">
//                     <button className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
//                       <span className="sr-only">Quantity button</span>
//                       <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
//                       </svg>
//                     </button>
//                     <div>
//                       <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min={1} placeholder="1" required />
//                     </div>
//                     <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
//                       <span className="sr-only">Quantity button</span>
//                       <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                       </svg>
//                     </button>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
//                   {data.price}
//                 </td>
//                 <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
//                   $599
//                 </td>
//                 <td className="px-6 py-4">
//                   <p className="font-medium text-red-600 dark:text-red-500 hover:underline hover:cursor-pointer" onClick={()=>dispatch({type:"REMOVE",index:index})}>Remove</p>
//                 </td>
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>
//     </div>
//   )
// }

export default function Cart() {
  const { state, dispatch } = useContext(CartContext);
  console.log("cartstate",state)
  let totalPrice = 0
  totalPrice += state.reduce((total, item) => total + (item.quantity * item.price), 0);

  const handleIncrement = (id) => {
    dispatch({ type: "INCREMENT", id });
  };

  const handleDecrement = (id) => {
  dispatch({ type: "DECREMENT", id });
  };


  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch({ type: "UPDATE", id, quantity });
    }
  };

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  const handleDrop=async()=>{
    alert("Order has been placed.")
    await fetch('/api/cartData',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        items:state,
        totalPrice:totalPrice,
        order_date:new Date().toDateString()
      })
    }).then(response=>{
        if(response.status===200){
          dispatch({type: "DROP"})
        }
      })

  }

  return (
    <div>
      {state.length > 0 ?
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Product</th>
                <th scope="col" className="px-6 py-3">Qty</th>
                <th scope="col" className="px-6 py-3">Price</th>
                <th scope="col" className="px-6 py-3">Total Price</th>
                <th scope="col" className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {state.map((data, index) => {
                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {data.title}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <button
                          onClick={() => handleDecrement(data.id)}
                          className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        >
                          <span className="sr-only">Decrement</span>
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                          </svg>
                        </button>
                        {/* <input
                      value={data.quantity} 
                      className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      min="1"
                      onChange={(e) => handleQuantityChange(data.id, parseInt(e.target.value))}
                    /> */}
                        <p className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          min="1"
                          onChange={(e) => handleQuantityChange(data.id, parseInt(e.target.value))}>{data.quantity}</p>

                        <button
                          onClick={() => handleIncrement(data.id)}
                          className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        >
                          <span className="sr-only">Increment</span>
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                          </svg>
                        </button>
                      </div>
                    </td>

                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {data.price}
                    </td>

                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {(data.price * data.quantity).toFixed(2)}
                    </td>

                    <td className="px-6 py-4">
                      <p
                        className="font-medium text-red-600 dark:text-red-500 hover:underline hover:cursor-pointer"
                        onClick={() => handleRemove(index)}
                      >
                        Remove
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className='mt-4'>
            <p className="text-xl font-semibold ps-5">Total: {totalPrice.toFixed(2)}</p>
          </div><br />
          <button type="button" onClick={handleDrop} className="mx-5 text-white bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">Checkout</button>
        </div>  

    : <div><h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center py-5 my-5">Cart is Empty!!</h1></div>
    }
    </div>
  );
}

