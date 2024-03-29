import ElectronicsBG from "../assets/image1.jpg";
import AnalogCircuitsBG from "../assets/analog-circuits2.jpg";
import PCBPrintingBG from "../assets/pcb-printing.webp";

function Main() {
  return (
    <main className="flex min-h-screen w-full items-center  justify-center border-b-2 border-b-gray-400">
      <div
        style={{ "--background-image": ElectronicsBG }}
        className="flex w-1/4 
            flex-col items-center justify-center bg-[url(--background-image)] "
      >
        <h3 className="m-4 text-2xl">Welcome to ElectroCreate Store</h3>
        <p className="m-2 text-wrap">
          A leader market electronics part Store which helps you to convert your
          ideas to a wonderful gadgets and projects.
        </p>
        <div className="flex items-center justify-evenly ">
          <button className="mx-4 rounded-full bg-red-600 p-4 text-white">
            Start Shopping
          </button>
          <button className="mx-4 rounded-full bg-blue-300 p-4 text-white">
            Ask Consultant
          </button>
        </div>
      </div>
    </main>
  );
}

function Store() {
  const storeItemsArr = Array(7).fill(0);
  return (
    <section className="flex min-h-screen w-full  flex-wrap justify-center  border-b-2 border-b-gray-400">
      {storeItemsArr.map(() => (
        <StoreItem />
      ))}
    </section>
  );
}

function StoreItem() {
  return (
    <div className="m-2 inline-flex min-h-fit w-1/4 flex-col rounded p-2">
      <img className="h-1/2 w-full rounded-lg" src={AnalogCircuitsBG} />
      <h3 className="text-strong m-3">
        <b>Analog Circuits</b>
      </h3>
      <p className="m-2 text-wrap text-justify">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  );
}

function Services() {
  const repeater = Array(4);
  return (
    <section className="flex min-h-screen w-full  flex-wrap items-center justify-center border-b-2 border-b-gray-400 ">
      {/* {repeater.map((v, i) => <ServiceItem index={i}/>)} */}
 
      <ServiceItem index={1} />
      <ServiceItem index={2} />
      <ServiceItem index={3} />
      <ServiceItem index={4} />

      
    </section>
  );
}

function ServiceItem(props:{index: number}) {
  return (
   
<div className={" w-1/3 rounded-md m-2 text-wrap " + (props.index % 2 == 0 ? ' flex  flex-row ' : ' flex flex-row-reverse ')}>
      <img src={PCBPrintingBG} className={ " w-24 h-16 rounded-lg m-2 inline "}  />
      <div className={"inline flex-col"}>
      <h4>
        <b>Service 1</b>
      </h4>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable
      </p>
      </div>
      
    </div>
    
    
  );
}

export function Home() {
  return (
    <>
      <Main />
      <Store />
      <Services />
    </>
  );
}
