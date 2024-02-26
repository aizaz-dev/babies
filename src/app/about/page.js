import Image from "next/image";
import "./style.scss";
// import "../app/style/style.scss"

export default function Home() {
  return (
    <main className="container">
      <div className="first">
        <div className="t1">Meet Claudette</div>
      </div>
      <div className="main">
        <div className="second">
          <h2 className="t2">About Claudette</h2>

          <h2 className="t3">
            I am a passionate Long Island photographer with over 8 years of
            experience in the field.
          </h2>

          <p className="t4">
            I have taken classes and workshops with some of the best
            photographers in the world. My work has even been featured on
            Shutterfly’s Blog of Creative Newborn Ideas. While I love to
            photograph almost anything, my passion lies in family and portrait
            photography, with special emphasis on newborn photography.
          </p>

          <h2 className="t5">Premiere Family Photography on Long Island</h2>
          <p className="t6">
            Married with a beautiful girl and identical twin boys, I especially
            enjoy photographing couples, families, children and newborns. Along
            with a Master’s degree in Speech Language Pathology, I have over
            fifteen years of experience as a children’s dance and music teacher.
            As a result, I excel at helping kids feel happy and relaxed during
            photo shoots. My goal is to achieve beautiful, natural-looking
            photos every time.
          </p>
        </div>
        <div className="third">
          {/* <div className="imgg"> */}
          <img className="imaag" src="/family.jpg" alt="img" />
          {/* </div> */}
        </div>
      </div>

      <div className="main2">
        <div className="forth">
          <div className="t7">
            Let me capture all your special <br /> moments and memories today.
          </div>
          <div className="t8">
            I genuinely look forward to the opportunity of working with you <br /> and
            your family.
          </div>

          <div className="fifth">
            <button className="contact">Contact Us</button>
          </div>
        </div>
      </div>

      <div className="main3">
        <div className="sixth">
          <h2 className="t9">
            “You don’t make a photograph just with a camera. You bring to the
            act of <br /> photography all the pictures you have seen, the books you
            have read,  the <br /> music you have heard, the people you have loved.”
          </h2>
          <h3 className="t10">- Ansel Adams</h3>
        </div>
      </div>
    </main>
  );
}
