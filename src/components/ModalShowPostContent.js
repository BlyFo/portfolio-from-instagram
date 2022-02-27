import React, { useEffect } from 'react';
import { showSinglePosts, showSydeCardsPosts } from '../Config/Posts';
import DisplayMediaPostByType from '../Helpers/DisplayMediaPostByType';
import './Modal.css';
import './Carousel.css';

function ModalShowPostContent({ close, show, postContent, postType }) {

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  //https://www.youtube.com/watch?v=9HcxHDS2w1s&t=639s
  useEffect(() => {
    const buttons = document.querySelectorAll("[data-carousel-button]");
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
      })
    });

    return function cleanup() {
      buttons.forEach(button => {
        button.removeEventListener("click", () => {
          const offset = button.dataset.carouselButton === "next" ? 1 : -1;
          const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

          const activeSlide = slides.querySelector("[data-active]");
          let newIndex = [...slides.children].indexOf(activeSlide) + offset;
          if (newIndex < 0) newIndex = slides.children.length - 1;
          if (newIndex >= slides.children.length) newIndex = 0;

          slides.children[newIndex].dataset.active = true;
          delete activeSlide.dataset.active;
        })
      });
    }
  }, []);

  function ShowCarouselPosts() {

    let posts = null;
    let firstElementCreated = false;

    if (postContent !== false) {
      posts = postContent.map((post, index) => {
        //console.log(index)
        if (!firstElementCreated) {
          firstElementCreated = true;
          return (
            <li className='slide' data-active key={post.node.id}>
              <DisplayMediaPostByType media={post.node} filter={showSydeCardsPosts} />
              {/* <p> used for debug  purposes*/}
              <p className='juanito'>{index}</p>
            </li>
          );
        } else {
          return (
            <li className='slide' key={post.node.id}>
              <DisplayMediaPostByType media={post.node} filter={showSydeCardsPosts} />
              {/* <p> used for debug  purposes*/}
              <p className='juanito'>{index}</p>
            </li>
          );
        }
      })
    }
    return posts
  }

  function Carousel() {
    return (
      <div className="carousel" data-carousel>
        { /* https://www.toptal.com/designers/htmlarrows/arrows/ */}
        { /* https://www.w3schools.com/html/html_entities.asp */}
        <button className="carousel-button prev" data-carousel-button="prev">&#8656;</button>
        <button className="carousel-button next" data-carousel-button="next">&#8658;</button>
        <ul data-slides>
          <ShowCarouselPosts />
        </ul>
      </div>
    );
  }

  function ShowPostByType() {
    let returnPost = null
    if (postType !== false)
      switch (postType) {
        case "GraphSidecar":
          returnPost = <Carousel />;
          break;

        case "GraphImage":
          returnPost = <DisplayMediaPostByType media={postContent} />
          break;

        case "GraphVideo":
          returnPost = <DisplayMediaPostByType media={postContent} />
          break;

        default:
          console.log("post type not found: " + postType);
          break;
      }
    return returnPost;
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <ShowPostByType />
      </section>
      <button className='modal-Close' onClick={() => close(false)}>X</button>
    </div>
  );
}

export default ModalShowPostContent;