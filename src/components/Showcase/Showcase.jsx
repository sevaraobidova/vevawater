import React, { Component } from "react";
import Slider from "react-slick";

export default function Showcase() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste enim sapiente voluptatum voluptate quisquam possimus modi corrupti? Voluptatibus vero officia, quaerat qui sunt recusandae! Ullam maiores mollitia obcaecati explicabo provident rem perspiciatis culpa sequi cum?</h3>
        </div>
        <div>
          <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui numquam rem, sapiente sequi laudantium blanditiis soluta nemo placeat optio dolore! Harum, est quas dolores neque beatae dicta laudantium numquam ducimus reprehenderit omnis natus hic sed dolore aliquam doloremque placeat, magni obcaecati illo! Et, numquam culpa.</h3>
        </div>
        <div>
          <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus tempore aliquam doloribus quos iusto neque omnis vero cumque veritatis enim corrupti incidunt reiciendis mollitia est a, earum dicta. Ipsam at fugiat, officia qui laboriosam assumenda!</h3>
        </div>
        <div>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi at neque molestias velit tenetur repellendus impedit sit autem rem ipsam earum ipsa, dignissimos quos expedita sunt, voluptatum voluptates quasi perspiciatis magnam. Magni eos porro nostrum sint iste ipsa obcaecati totam consequuntur, fugit illo, ex deserunt?</h3>
        </div>
        <div>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatem harum itaque non sapiente numquam unde voluptatibus quod blanditiis saepe hic praesentium impedit deserunt, voluptate autem facere repellat in similique dolorum corrupti porro esse eveniet neque ratione? Est impedit minus beatae aut fugit quibusdam minima.</h3>
        </div>
        <div>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corrupti quasi ratione inventore. Rem ratione dolor quod aut dolorum vel fuga vitae mollitia quae ipsa dolore excepturi iste alias, minima maxime veniam molestias? Harum nesciunt consequuntur vero, alias quos nihil adipisci molestiae porro ipsum aliquam ipsam!</h3>
        </div>
      </Slider>
    </div>
  );
}
