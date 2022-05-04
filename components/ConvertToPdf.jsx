import Image from 'next/image';
import React from 'react'
import Pdf from "react-to-pdf";
const ref = React.createRef();

const options = {
  orientation: 'potrate',
  unit: 'in',
  format: [2,4]
};

const ConvertToPdf = ({data}) => {
  return (
    <div>
        <Pdf  targetRef={ref} filename="code-example.pdf">
             {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
        </Pdf>
        <div ref={ref} className="bg-white p-3">
           <div className="">
                <div className=" bg-blue-700 flex justify-center item-center py-3">
                    <Image src='/logo.svg' alt='logo' height={40} width={150} />
                </div>

                <div className=" space-y-4 flex flex-col items-center">
                    <h2>Receipt from SmilePlug</h2>
                    <p>Receipt no: 12445546565</p>


                    <div className="flex justify-center space-x-4 items-center">
                        <div className="">
                            <p>AMOUNT PAID</p>
                            <p>39.00</p>
                        </div>

                        <div className="">
                            <p>DATE PAID</p>
                            <p>39.00</p>
                        </div>

                        <div className="">
                            <p>PAYMENT METHOD</p>
                            <p>39.00</p>
                        </div>

                    </div>
                </div>


           </div>
        </div>
    </div>
  )
}

export default ConvertToPdf