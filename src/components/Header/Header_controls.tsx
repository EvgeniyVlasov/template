import ControlItems from "./Header_control_items";
import ControlPreview from "./Header_control_disc";

function Controls() {
  const svgArrowLeft = <img className="controls_button_img" src="/img/Header_button_left.png" alt="previous song" />
  const svgPause = <img className="controls_button_img" src="/img/Header_button_play.png" alt="play" />
  const svgArrowRight = <img className="controls_button_img" src="/img/Header_button_right.png" alt="next song" />
  const svgHeart = <img className="controls_button_img" src="/img/Header_button_favourite.png" alt="add to favourite" />

  return (
    <div className="controls">
      <ControlPreview />

      <div className="controls_info" />

      <ul className="controls_item_wrapper">
        <ControlItems svgItems=
          {
            [
              svgArrowLeft, svgPause, svgArrowRight, svgHeart
            ]
          } />
      </ul>
    </div>
  );
}

export default Controls;