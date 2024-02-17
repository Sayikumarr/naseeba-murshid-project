import React, { useEffect } from 'react';
import $ from 'jquery';
import Circles from 'circles';

const YourComponent = () => {
  useEffect(() => {
    const handleScroll = () => {
      const hero = $(".hero_area");
      const menu = $(".custom_menu-container");
      const scrollTop = $(window).scrollTop();
      if (scrollTop > hero.height()) {
        menu.addClass("menu_fixed-position");
        $(".custom_menu-container + section").addClass("mt-5");
      } else {
        menu.removeClass("menu_fixed-position");
        $(".custom_menu-container + section").removeClass("mt-5");
      }
    };

    $(window).on('scroll', handleScroll);

    return () => {
      $(window).off('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const createCircle = (id, value) => {
      return Circles.create({
        id: id,
        radius: 65,
        value: value,
        maxValue: 100,
        width: 5,
        text: (val) => {
          return val + "%";
        },
        colors: ["transparent", "#ffffff"],
        duration: 400,
        wrpClass: "circles-wrp",
        textClass: "progress_text",
        valueStrokeClass: "circles-valueStroke",
        maxValueStrokeClass: "circles-maxValueStroke",
        styleWrapper: true,
        styleText: true
      });
    };

    const circles = [
      { id: 'circles-1', value: 85 },
      { id: 'circles-2', value: 55 },
      { id: 'circles-3', value: 65 },
      { id: 'circles-4', value: 85 }
    ];

    circles.forEach((circle) => {
      createCircle(circle.id, circle.value);
    });
  }, []);

  return (
    <div>
      {/* Your component's JSX */}
      <p>This is to test</p>
    </div>
  );
};

export default YourComponent;
