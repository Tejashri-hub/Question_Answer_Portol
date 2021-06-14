import React from 'react';

function Div(props){
  return (
  <div className="main">
    <div className="first">
        <div className="firstone">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTacTmPUhMH8T2wz8HfeL46jHZ_YcQjcwTfrw&usqp=CAU" alt="" />
        </div>
        <div className="firsttwo">
            <p>{props.paraone} <br/> {props.pone}</p>
        </div>
    </div>
    <div className="second">
        <p className="secondone">
            {props.paratwo}
        </p>
        <p className="secondtwo">
            {props.parathree}
        </p>
    </div>
    <div className="third">
        <div className="thirdone">
            <input type="text" placeholder="comment..."/>
       </div>
        <div className="thirdtwo">
            <button >Comment</button>
        </div>
     </div>
</div>
  );
}

export default Div;