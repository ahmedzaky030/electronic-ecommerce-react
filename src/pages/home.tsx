import ElectronicsBG from "../assets/image1.jpg";
import AnalogCircuitsBG from "../assets/analog-circuits2.jpg";
import PCBPrintingBG from "../assets/pcb-printing.webp";
import EmbeddedBG from "../assets/embeded.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHouse } from "@fortawesome/free-solid-svg-icons";


function Main() {
  return (
    <main className="flex min-h-screen w-full items-center  justify-center border-b-2 border-b-gray-400">
      <div
        
        className="flex w-1/4 
            flex-col items-center justify-start bg-[url(--background-image)] "
      >
        <h3 className="m-4 text-2xl">Welcome to ElectroCreate Store</h3>
        <p className="m-2 text-wrap">
          A leader market electronics part Store which helps you to convert your
          ideas to a wonderful gadgets and projects.
        </p>
        <div className="flex items-center justify-evenly my-4 ">
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

function ServiceItem(props: { index: number }) {
  return (
    <div
      className={" m-2 w-1/3 text-wrap rounded-md flex  flex-row "}>
      <img
        src={PCBPrintingBG}
        className={"m-2 inline h-16 w-24 rounded-lg "}
      />
      <div className={"inline flex-col justify-start"}>
        <h4>
          <b>Service 1</b>
        </h4>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable
        </p>
      </div>
    </div>
  );
}

function Projects(){
  const storeItemsArr = Array(5).fill(0);
  return (
    <section className="flex min-h-screen w-full  flex-wrap justify-center border-b-gray-400" >
      {storeItemsArr.map(() => (
        <ProjectItem />
      ))}
    </section>
  );
}

function ProjectItem(){
  const element = <FontAwesomeIcon icon={faHeart}/>
  return (
    <div className={"w-1/6 min-h-96 m-2 p-1 border-solid border-gray-300 bg-auto bg-no-repeat bg-center cursor-pointer" } 
    style={"background-image: url("+EmbeddedBG+")"}>
      <FontAwesomeIcon icon={faHeart} className="bg-red-500 relative"/>
    </div>
  )
}

export function Home() {
  return (
    <>
      <Main />
      <Store />
      <Services />
      <Projects />
    </>
  );
}
