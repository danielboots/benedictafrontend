import styles from "@/styles/Hero.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.herohome}>
        <h1 className=" font-body ml-6 z-20 font-bold   ">Benedicta Syran</h1>
        <h2 className="  focus-in-contract-bck tracking-widest font-body text-center mt-5 z-20  text-2xl  sm:text-xl md:text-3xl  ">
          {" "}
          Singer Songwriter
        </h2>
      </div>
    </div>
  );
}
