function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
loco();

let topscreentl = gsap.timeline({});
topscreentl
  .from("#lowest", {
    opacity: 0,
    onStart: function () {
      $("#lowest").textillate({
        in: {
          effect: "fadeInUp",
          callback: function () {
            $("#lowest").textillate("out");
          },
        },
        out: { effect: "fadeOutUp" },
      });
    },
    duration: 0.4,
  })
  .from("#second-lowest", {
    opacity: 0,
    delay: 1,
    onStart: function () {
      $("#second-lowest").textillate({
        in: {
          effect: "fadeInUp",
          callback: function () {
            $("#second-lowest").textillate("out");
          },
        },
        out: { effect: "fadeOutUp" },
      });
    },
    duration: 0.4,
  })
  .from("#second-top", {
    opacity: 0,
    delay: 0.6,
    onStart: function () {
      $("#second-top").textillate({
        in: {
          effect: "fadeInUp",
          callback: function () {
            $("#second-top").textillate("out");
          },
        },
        out: { effect: "fadeOutUp" },
      });
    },
    duration: 0.4,
  })
  .from("#top", {
    opacity: 0,
    delay: 0.7,
    onStart: function () {
      $("#top").textillate({
        in: {
          effect: "fadeInUp",
        },
      });
    },
    duration: 0.4,
  })
  .to('.top-screen',{
    delay : 0.9,
    top : '-100%',
    ease : Expo.easeInOut,
    duration : 1.2,
  })
.to(".bounding-elem", {
  transform: "translateY(0%)",
  duration: 1,
  stagger: "0.2",
  ease: Expo.ease,
},'same')
.to(".nav-bound", {
  delay: 1,
  transform: "translateY(0%)",
  duration: 0.8,
  ease: Expo.ease,
},'same');

if (window.innerWidth > 590) {
  let newtl = gsap.timeline({
    scrollTrigger: {
      trigger: ".nawdhar",
      scroller: ".main",
      scrub: 2,
      start: "top 40%",
      end: "top 10%",
    },
  });
  newtl
    .to(
      ".vinayak",
      {
        x: "-100",
      },
      "same"
    )
    .to(
      ".nawdhar",
      {
        x: "100",
      },
      "same"
    );

  tlhero = gsap.timeline({
    scrollTrigger: {
      trigger: ".heroFooter",
      scroller: ".main",
      scrub: 2,
      start: "top 70%",
      end: "top 0%",
    },
  });
  tlhero
    .to(
      ".vinayak",
      {
        y: "-50%",
      },
      "same"
    )
    .to(
      ".nawdhar",
      {
        y: "-50%",
      },
      "same"
    )
    .to(
      "#hero",
      {
        opacity: 0,
      },
      "same"
    )
    .to(
      ".main",
      {
        backgroundColor: "#B3B3B3",
      },
      "same2"
    )
    .to(
      "#projects",
      {
        color: "#000",
      },
      "same2"
    )
    .from(
      "#projects",
      {
        opacity: 0,
        x: "-300px",
        y: "-100px",
      },
      "same2"
    );

  //navbar animation
  document
    .querySelector(".nav-links h4")
    .addEventListener("click", function () {
      this.style.display = "none";
      gsap.to(".nav-links a", {
        transform: "translateY(0%)",
        duration: 0.4,
        stagger: 0.1,
        ease: Power1,
      });
    });

  //hover animation
  document.querySelectorAll(".nav-anchor").forEach((elem) => {
    elem.addEventListener("mousemove", function () {
      gsap.to(elem.querySelector(".hover-anim"), {
        transform: "translateX(0%)",
        duration: 0.7,
        ease: Power1,
        yoyo: "true",
      });
    });
  });
  document.querySelectorAll(".nav-anchor").forEach((elem) => {
    elem.addEventListener("mouseleave", function () {
      var tl = gsap.timeline();
      tl.to(elem.querySelector(".hover-anim"), {
        transform: "translateX(100%)",
        duration: 0.7,
        ease: Power1,
      }).to(elem.querySelector(".hover-anim"), {
        transform: "translateX(-100%)",
        duration: 0,
      });
    });
  });

  //Project Page animation
  document.querySelectorAll(".project").forEach((project) => {
    var xprev = 0;
    project.addEventListener("mousemove", function (dets) {
      let rotate = gsap.utils.clamp(-15, 15, dets.clientX - xprev);
      xprev = dets.clientX;
      ydiff = dets.clientY - project.getBoundingClientRect().y;
      project.querySelector("h1").style.opacity = "0.3";
      project.querySelector("h1").style.paddingLeft = "40px";
      gsap.to(project.querySelector(".project-img"), {
        visibility: "initial",
        opacity: "1",
        duration: 0.4,
        ease: Power3,
        left: dets.clientX,
        rotate: rotate,
      });
    });
  });
  document.querySelectorAll(".project").forEach((project) => {
    project.addEventListener("mouseleave", function (dets) {
      project.querySelector("h1").style.opacity = "0.7";
      project.querySelector("h1").style.paddingLeft = "0px";
      gsap.to(project.querySelector(".project-img"), {
        opacity: "0",
        duration: 0.4,
        visibility: "hidden",
      });
    });
  });

  //About page animation
  aboutTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      scroller: ".main",
      start: "top 80%",
      end: "top 20%",
      scrub: 2,
    },
  });
  aboutTimeline
    .to(
      "#projects",
      {
        opacity: 0,
        x: "300px",
      },
      "same"
    )
    .to(
      ".main",
      {
        backgroundColor: "#000",
      },
      "same"
    )
    .from(".subAbout", {
      gap: "400px",
      opacity: 0,
      ease: Power1,
    });

  let tl3 = gsap.timeline({
    scrollTrigger: {
      scroller: ".main",
      trigger: ".timeline-page",
      start: "top 100%",
      end: "top 0%",
      scrub: 2,
    },
  });
  tl3
    .to(
      ".subAbout",
      {
        gap: "400px",
        opacity: 0,
      },
      "same1"
    )
    .to(
      ".about",
      {
        y: "-100px",
        opacity: 0,
      },
      "same1"
    )
    .to(
      ".main",
      {
        backgroundColor: "#b3b3b3",
      },
      "same"
    )
    .to(
      ".timeline-page",
      {
        color: "black",
      },
      "same"
    )
    .from(
      ".timeline-page",
      {
        opacity: 0,
      },
      "same"
    )
    .from(".timeline-1", {
      opacity: 0,
      x: "100px",
    })
    .from(".timeline-2", {
      opacity: 0,
      x: "-100px",
    })
    .from(".timeline-3", {
      opacity: 0,
      x: "100px",
    })
    .from(".timeline-4", {
      opacity: 0,
      x: "-100px",
    });

  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".timeline-page",
      scroller: ".main",
      start: "top 60%",
      end: "top 0%",
      ease: "Power1",
      scrub: 2,
    },
  });
  tl4.to(".filling-line", {
    height: "100%",
  });
}
