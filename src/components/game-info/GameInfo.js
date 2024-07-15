import Friends from '../../assets/images/friends.png'
import React, { useEffect } from 'react';
import winSoundFile from '../../assets/sounds/win-sound.mp3';
import drawSoundFile from '../../assets/sounds/Draw.wav';
import './GameInfo.css'; 

const GameInfo = ({ status, winner, xIsNext, moves }) => {
  useEffect(() => {
    const generateStars = () => {
      const starContainer = document.querySelector('.star-animation');
      starContainer.innerHTML = ''; // Clear existing stars
      for (let i = 0; i < 100; i++) { // Number of stars
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 170}vw`;
        star.style.top = `${Math.random() * 80}vw`;
        starContainer.appendChild(star);
      }
    };

    if (winner) {
      const winSound = new Audio(winSoundFile);
      winSound.play();
      generateStars();

      // Trigger the star animation
      document.querySelector('.star-animation').classList.add('active');
      setTimeout(() => {
        document.querySelector('.star-animation').classList.remove('active');
      }, 3000); }
      
      else if (moves === 9) {
      const drawSound = new Audio(drawSoundFile);
      drawSound.volume = 0.5; // Set volume to 50%
      drawSound.play();
    }
  }, [winner, moves]);
  return (
    <section className="game-information">
      <div className="star-animation"></div>
      {moves > 8 && !winner ? (
        <h3 className="draw-message">It's a draw!</h3>
      ) : xIsNext && !winner ? (
        <h3 className="player-x">It's your turn, player X</h3>
      ) : !xIsNext && !winner ? (
        <h3 className="player-o">Now you, player O!</h3>
      ) : winner && status === 'Winner: X' ? (
        <h3 className="player-o">Nice! I won!</h3>
      ) : (
        <h3 className="player-x">Wohoo! I made it!</h3>
      )}
      <img src={Friends} alt="Player X and Player O" />
    </section>
  );
}

export default GameInfo
